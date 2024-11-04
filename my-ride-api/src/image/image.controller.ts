import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger'; // Import ApiResponse
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageService } from './image.service';

@ApiTags('images')
@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload/:documentId')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Temporary storage before moving
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExt = extname(file.originalname);
        const filename = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
        callback(null, filename);
      },
    }),
  }))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('documentId') documentId: number,
    @Body() createImageDto: CreateImageDto,
  ) {
    if (!file) {
      throw new NotFoundException('File not found');
    }

    const filePath = file.path; // Use the path to the temporary file uploaded
    return this.imageService.createImage(createImageDto, filePath, documentId);
  }

  @Get()
  async findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns the public URL of the image.' }) // Add Swagger response
  @ApiResponse({ status: 404, description: 'Image not found.' }) // Handle not found case
  async getPublicImageUrl(@Param('id') id: number) {
    return this.imageService.getPublicImageUrl(id);
  }

  @Get('details/:id') // Renamed to avoid conflict
  async findOne(@Param('id') id: number) {
    return this.imageService.findOne(id);
  }

  @Delete(':id')
  async deleteImage(@Param('id') id: number) {
    return this.imageService.deleteImage(id);
  }
}
