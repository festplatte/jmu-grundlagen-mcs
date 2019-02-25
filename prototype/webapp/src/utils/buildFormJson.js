export default function buildFromJson(form) {
  const result = {};
  for (let i = 0; i < form.length; i++) {
    const currentElem = form[i];
    result[currentElem.name] = currentElem.value;
  }
  return result;
}
