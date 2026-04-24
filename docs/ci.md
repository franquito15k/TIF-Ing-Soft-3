# Documentacion de CI

## Herramienta
Se utiliza GitHub Actions con un flujo llamado `CI`.

## Pasos automatizados
1. Checkout del repositorio.
2. Setup de Node.js 20.
3. Instalacion de dependencias con `npm ci`.
4. Build basico con `npm run build`.
5. Ejecucion de tests unitarios con `npm test`.
6. Verificacion de estilo con `npm run lint`.
7. Reporte de estado automatico (success/failure) en la pestaña Actions.

Nota operativa: todos los comandos `npm` se ejecutan desde la raiz del repositorio `TIF-Ing-Soft-3`, no desde la carpeta padre.

## Evidencias (capturas pendientes)
- [ ] Pantalla del workflow configurado en Actions.
- [ ] Ejemplo de ejecucion exitosa.
- [ ] Ejemplo de ejecucion fallida.

## Errores simulados y resolucion

### 1) Test fallido tras fusion
- Simulacion: se cambia el retorno esperado en `tests/utils.test.js` despues de fusionar una rama.
- Resultado: `npm test` falla en el pipeline por una asercion rota.
- Resolucion: se corrige el caso de prueba y se re-ejecuta el pipeline desde la raiz del repositorio.

### 2) Error de estilo detectado por linter
- Simulacion: se agrega una variable sin usar en `src/server.js`.
- Resultado: `npm run lint` falla.
- Resolucion: se elimina la variable y se corre de nuevo.

### 3) Problema de dependencias
- Simulacion: se ejecuta `npm ci` y aparecen warnings por dependencias deprecadas (`inflight@1.0.6` y `glob`).
- Resultado: la instalacion finaliza correctamente (`found 0 vulnerabilities`), pero CI deja evidencia de deuda tecnica en dependencias transitivas.
- Resolucion: se actualizan dependencias directas (por ejemplo Jest), se revalida con `npm ci`, y se monitorean warnings en cada corrida para seguir reduciendo transitivas deprecadas.

## Recomendaciones y aprendizajes
- Mantener tests locales antes de hacer push.
- Usar ramas por integrante para aislar cambios.
- Revisar el pipeline antes de hacer merge a `main`.
