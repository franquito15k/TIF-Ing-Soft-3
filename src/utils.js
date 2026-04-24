const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

function isValidUrl(value) {
  if (typeof value !== "string") {
    return false;
  }
  return urlPattern.test(value.trim());
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function scoreToLabel(score) {
  if (score >= 80) {
    return "critico";
  }
  if (score >= 55) {
    return "alto";
  }
  if (score >= 30) {
    return "medio";
  }
  return "bajo";
}

function summarizeRisk(score) {
  const label = scoreToLabel(score);
  const base = "El analisis detecto señales";

  if (label === "critico") {
    return `${base} altamente maliciosas. Se recomienda aislamiento inmediato.`;
  }
  if (label === "alto") {
    return `${base} sospechosas. Aplicar cuarentena y revision manual.`;
  }
  if (label === "medio") {
    return `${base} mixtas. Observar comportamiento en sandbox.`;
  }
  return `${base} leves. Continuar monitoreo preventivo.`;
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

module.exports = {
  isValidUrl,
  summarizeRisk,
  formatFileSize,
  clamp,
  scoreToLabel
};
