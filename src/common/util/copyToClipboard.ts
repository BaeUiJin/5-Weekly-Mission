// TODO: 다른 컴포넌트에서 사용할 때 타입 지정할 것

export const copyToClipboard = (text, callback) => {
  if (!navigator?.clipboard) {
    const tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    callback?.();
    return;
  }
  window.navigator.clipboard.writeText(text).then(() => {
    callback?.();
  });
};
