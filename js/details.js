function switchTab(name) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.navbtn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    document.querySelector('[data-tab="' + name + '"]').classList.add('active');
}

document.querySelectorAll('.navbtn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});


document.querySelectorAll('.skill-head').forEach(head => {
    head.addEventListener('click', () => {
        const block = head.closest('.skill-block');
        const isOpen = block.classList.contains('open');
        document.querySelectorAll('.skill-block').forEach(b => b.classList.remove('open'));
        if (!isOpen) block.classList.add('open');
    });
});


document.querySelectorAll('.skill-logo img').forEach(img => {
    img.addEventListener('error', () => {
        img.classList.add('missing');
        img.closest('.skill-logo').classList.add('no-img');
    });
});

document.getElementById('yr').textContent = new Date().getFullYear();
