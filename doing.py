from pdf2image import convert_from_path

pdf_file = 'logos.pdf'
images = convert_from_path(pdf_file)

for i, image in enumerate(images):
    image.save(f'page_{i + 1}.jpg', 'JPEG')
