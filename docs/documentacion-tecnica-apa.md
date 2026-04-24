# Documentacion Tecnica del Proyecto TIF-Ing-Soft-3

## Datos generales (formato APA)
- Institucion: [Completar]
- Catedra/Materia: [Completar]
- Trabajo Integrador Final: TIF-Ing-Soft-3
- Integrantes: [Completar]
- Docente: [Completar]
- Fecha: [Completar]

## Resumen
Este documento describe el desarrollo tecnico del proyecto TIF-Ing-Soft-3, incluyendo arquitectura, integracion continua, pruebas, control de estilo y evidencias de ejecucion. Tambien se detallan los problemas encontrados y su resolucion durante la implementacion.

## Introduccion
El objetivo del proyecto es ofrecer un analizador de malware con interfaz web, backend en Node.js y validaciones tecnicas automatizadas mediante CI para asegurar calidad continua del codigo.

## Tecnologias utilizadas
- Node.js 20
- Express
- Jest (pruebas unitarias)
- ESLint (estilo)
- GitHub Actions (CI)

## Paso a paso de desarrollo y documentacion
1. Se definio la estructura base del proyecto (carpetas `src`, `public`, `tests`, `docs`).
2. Se implemento el servidor en `src/server.js` con endpoints de salud y analisis.
3. Se construyo la logica auxiliar en `src/utils.js`.
4. Se creo la interfaz inicial en `public/index.html`, `public/styles.css` y `public/app.js`.
5. Se escribieron pruebas unitarias en `tests/utils.test.js` (5 casos minimos).
6. Se agregaron scripts de trabajo en `package.json` (`build`, `test`, `lint`).
7. Se configuro CI con GitHub Actions en `.github/workflows/ci.yml`.
8. Se documento la CI en `docs/ci.md` incluyendo errores simulados y resolucion.
9. Se adapto ESLint a version 9 usando `eslint.config.cjs`.
10. Se realizaron validaciones finales con `npm ci`, `npm run build`, `npm test` y `npm run lint`.

## Integracion continua (CI)
La integracion continua se ejecuta automaticamente en GitHub Actions al hacer `push` o `pull request`.

Pipeline configurado:
1. Checkout del repositorio.
2. Setup de Node.js 20.
3. Instalacion de dependencias con `npm ci`.
4. Build basico con `npm run build`.
5. Tests unitarios con `npm test`.
6. Lint con `npm run lint`.
7. Resultado final en estado `success` o `failure`.

Archivo de configuracion CI:
- `.github/workflows/ci.yml`

## Problemas tecnicos encontrados y resolucion
1. ESLint v9 no detectaba `.eslintrc.cjs`.
- Resolucion: migracion a `eslint.config.cjs`.

2. Warnings de dependencias deprecadas en `npm ci`.
- Resolucion parcial: actualizacion de Jest y ajustes en dependencias transitivas.
- Estado actual: instalacion correcta y sin vulnerabilidades, con warning remanente en `glob` por metadata deprecada en el ecosistema.

## Evidencias del trabajo (capturas sugeridas)
- Workflow de CI configurado en GitHub Actions.
- Ejecucion exitosa del pipeline.
- Ejecucion fallida simulada (test o lint).
- Correccion y re-ejecucion exitosa.

## Enlaces obligatorios
- Repositorio del proyecto:
  - https://github.com/franquito15k/TIF-Ing-Soft-3
- Herramienta de gestion del proyecto TIF:
  - [Pegar enlace aqui]
- Configuracion de CI:
  - https://github.com/franquito15k/TIF-Ing-Soft-3/blob/main/.github/workflows/ci.yml

## Conclusiones
El proyecto quedo con una base funcional de desarrollo y calidad: build, pruebas y linter automatizados en CI. Esto permite detectar errores temprano y mejorar la estabilidad antes de mergear a `main`.

## Referencias (APA breve)
- GitHub. (2026). GitHub Actions Documentation. https://docs.github.com/actions
- ESLint. (2026). ESLint Documentation. https://eslint.org/docs/latest/
- Jest. (2026). Jest Documentation. https://jestjs.io/docs/getting-started
- Node.js. (2026). Node.js Documentation. https://nodejs.org/docs/latest/api/
