const typeAll = async () => {
    const elements = document.querySelectorAll('.typewriter');
    
    for (const el of elements) {
        const text = el.getAttribute('data-text');
        
        for (let i = 0; i <= text.length; i += 1) {
            el.textContent = text.substring(0, i);
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        el.textContent = text;
        el.classList.add('typed-done');
    }
};

document.addEventListener('DOMContentLoaded', typeAll);