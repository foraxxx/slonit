## Основные команды git и их флаги :smile:
1. `git init` - инициализация репозитория
2. `git status` - используется для проверки изменений и текущего статуса ветки
3. `git show` - показывает тещий коммит
    - `--pretty=fuller` для вывода подробной информации
4. `git add` - добавление файлов с изменениями
    - `-f` нужен для добавления игнорируемых файлов
	- `-p` нужен для выбора сохранять или нет каждое изменение
	- `-A` сохранять все изменения, начиная с корня проекта
5. `git commit` - создание коммита
    - `-m` нужен для указания названия коммита
	- `--author` нужен для указания автора коммита
	- `-a` нужен для сохранения изменения файлов, которые уже отслеживаются **(без add)**
6. `git rm` - удаление файлов из директории и репозитория
    - `-r` для удаления директории
	- `--cached` удаляет только из репозитория, оставляя файлы в директории
	- `-f` удаляет файл из директории и репозитория, не смотря на несохраненные изменения
7. `git mv` - переименование файла в директории и в репозитории
8. `git push` - сохранение изменений в ветку
---
[Документация git](https://git-scm.com/doc)
---
![Картинка](https://img.freepik.com/premium-vector/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend_808510-1455.jpg?w=996)
`git commit -m "Спасибо за прочтение"`