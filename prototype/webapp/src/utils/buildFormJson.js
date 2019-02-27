export default function buildFromJson(form) {
  const result = {};
  for (let i = 0; i < form.length; i++) {
    const currentElem = form[i];
    if (currentElem.name && currentElem.name !== "") {
      result[currentElem.name] = currentElem.value;
    }
  }
  return result;
}
