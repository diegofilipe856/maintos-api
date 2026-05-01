# Arquitetura do projeto

Sempre seguir esta estrutura:

- Controllers ficam em: src/controllers
- Repositories ficam em: src/repositories
- Services/use cases ficam em: src/services
- Routes ficam em: src/routes
- DTOs ficam em: src/dtos
- Tipos/interfaces ficam em: src/types ou src/interfaces

Regras:

- Controller só recebe request, chama service/use case e retorna response.
- Service contém regra de negócio.
- Repository contém acesso ao banco.
- Não colocar regra de negócio no controller.
- Não criar controller fora da pasta controllers.
- Não criar repository fora da pasta repositories.
- Ao criar uma nova feature, criar os arquivos nos diretórios existentes seguindo o padrão dos arquivos já existentes.
