function getShareUrl() {
    return encodeURIComponent(window.location.href);
}

function getShareTitle() {
    return encodeURIComponent('承志杰 - 个人主页');
}

function getShareDescription() {
    return encodeURIComponent('泰州学院大三机器人工程学生，专注于AI和机器人技术');
}

function shareToWeChat() {
    alert('请截图分享到微信，或复制链接分享：\n\n' + window.location.href);
}

function shareToWeibo() {
    const url = 'https://service.weibo.com/share/share.php?url=' + getShareUrl() + '&title=' + getShareTitle();
    window.open(url, '_blank', 'width=600,height=400');
}

function shareToLinkedIn() {
    const url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + getShareUrl();
    window.open(url, '_blank', 'width=600,height=400');
}

function showQRCode() {
    const qrContainer = document.getElementById('qrContainer');
    const qrCodeDiv = document.getElementById('qrCode');
    
    if (qrContainer.style.display === 'none' || !qrContainer.style.display) {
        qrContainer.style.display = 'block';
        generateQRCode();
    } else {
        qrContainer.style.display = 'none';
    }
}

function generateQRCode() {
    const qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';
    
    const size = 180;
    const url = window.location.href;
    
    const qrCanvas = document.createElement('canvas');
    qrCanvas.width = size;
    qrCanvas.height = size;
    const ctx = qrCanvas.getContext('2d');
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);
    
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('二维码生成中...', size/2, size/2);
    
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
    img.alt = '分享二维码';
    
    img.onload = function() {
        qrCodeDiv.innerHTML = '';
        qrCodeDiv.appendChild(img);
    };
}
