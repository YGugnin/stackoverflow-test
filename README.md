# Instalation

- git clone https://github.com/YGugnin/stackoverflow-test.git
- npm install
- ng serve --open ( OR ng serve --host 0.0.0.0 for virtual OS)

## note
stackoverflow blocks IP after 300 requests. If it happens, just go to stackoverflow api doc, get your key from ajax request to server (make test reququest using form (https://api.stackexchange.com/docs/questions)) and change variable apiKey in src/app/config/app-settings.config.ts
