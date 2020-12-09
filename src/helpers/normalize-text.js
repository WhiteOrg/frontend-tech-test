const NormalizeText = (text) => {
  const normalized = text.replace(" ", "-");
  return normalized.toLowerCase();
};

export default NormalizeText;
