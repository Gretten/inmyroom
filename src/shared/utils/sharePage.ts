// Хелпер шаринга страницы
export const sharePage = async () => {
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ url });
    } catch (err) {
      console.error("Ошибка при шаринге:", err);
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url);
      alert("Ссылка скопирована в буфер обмена");
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  } else {
    // Фолбэк, если вообще ничего не доступно
    prompt("Скопируй ссылку вручную:", url);
  }
};
