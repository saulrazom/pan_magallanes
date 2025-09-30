/**
 * Composable para bloquear y desbloquear el scroll de la página
 */
export function useScrollLock() {
  let scrollPosition = 0;

  /**
   * Previene el scroll usando eventos
   */
  const preventScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  /**
   * Aplica estilos para bloquear el scroll
   */
  const applyLockStyles = () => {
    const html = document.documentElement;
    const body = document.body;

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    html.style.overflow = 'hidden';
    html.style.height = '100%';
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
    body.style.left = '0';
    body.style.right = '0';
  };

  /**
   * Remueve estilos de bloqueo de scroll
   */
  const removeLockStyles = () => {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = '';
    html.style.height = '';
    body.style.overflow = '';
    body.style.height = '';
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.left = '';
    body.style.right = '';
  };

  /**
   * Agrega event listeners para prevenir scroll
   */
  const addScrollListeners = () => {
    const options = { passive: false };
    window.addEventListener('scroll', preventScroll, options);
    window.addEventListener('wheel', preventScroll, options);
    window.addEventListener('touchmove', preventScroll, options);
    document.addEventListener('touchmove', preventScroll, options);
  };

  /**
   * Remueve event listeners de prevención de scroll
   */
  const removeScrollListeners = () => {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
  };

  /**
   * Bloquea el scroll de la página
   */
  const lockScroll = () => {
    applyLockStyles();
    addScrollListeners();
  };

  /**
   * Desbloquea el scroll de la página y restaura la posición
   */
  const unlockScroll = () => {
    removeLockStyles();
    removeScrollListeners();
    window.scrollTo(0, scrollPosition);
  };

  return {
    lockScroll,
    unlockScroll
  };
}