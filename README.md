# TIF-Ing-Soft-3

Analizador de malware potenciado por IA para archivos y enlaces sospechosos. El objetivo es generar reportes claros y accionables, apoyados por analisis semantico y sandboxing seguro.

## Estado actual
- Layout base y UI/UX inicial listos.
- Backend minimo con API de prueba.
- CI configurado con GitHub Actions.

## Instrucciones para clonar y ejecutar el proyecto
1. Clonar el repositorio:

```bash
git clone https://github.com/franquito15k/TIF-Ing-Soft-3.git
cd TIF-Ing-Soft-3
```

2. Instalar dependencias:

```bash
npm ci
```

3. Levantar el servidor local:

```bash
npm run start
```

4. Abrir en el navegador:

http://localhost:3000

## Scripts
```bash
npm run start   # servidor Express
npm run build   # chequeo basico de sintaxis
npm test        # pruebas unitarias (min 5)
npm run lint    # eslint
```

## Backlog del producto (extracto)
1. (ID 4) Estructura de la pagina (Layout Base) - hecho.
2. (ID 8) Diseno de interfaz de usuario (UI/UX) - hecho.
3. (ID CI) Configuracion de integracion continua - hecho.

## Ramas de trabajo
- main
- fran
- lauti
- ana
- gaspi

## Documentacion de CI
Ver [docs/ci.md](docs/ci.md)

## Configuracion de Integracion Continua
- Archivo de configuracion del workflow: [.github/workflows/ci.yml](.github/workflows/ci.yml)
- Workflow en GitHub Actions: `CI`

### Como funciona la integracion continua en este proyecto
En cada `push` a las ramas de trabajo y en cada `pull request` hacia `main`, GitHub Actions ejecuta automaticamente el pipeline.

El flujo corre estos pasos:
1. `npm ci` para instalar dependencias de manera reproducible.
2. `npm run build` para validar build/sintaxis basica.
3. `npm test` para ejecutar pruebas unitarias (minimo 5).
4. `npm run lint` para verificar estandares de estilo.

Si alguno falla, el pipeline queda en estado `failure`; si todos pasan, queda en `success`.
