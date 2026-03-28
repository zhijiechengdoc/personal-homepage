let messages = [];

function loadMessages() {
    const saved = localStorage.getItem('guestMessages');
    if (saved) {
        messages = JSON.parse(saved);
    }
    renderMessages();
}

function saveMessages() {
    localStorage.setItem('guestMessages', JSON.stringify(messages));
}

function renderMessages() {
    const container = document.getElementById('messagesList');
    
    if (messages.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = messages.map((msg, index) => `
        <div class="message-item">
            <div class="message-header">
                <span class="message-author">${escapeHtml(msg.name)}</span>
                <span class="message-time">${formatDate(msg.timestamp)}</span>
            </div>
            <div class="message-content">${escapeHtml(msg.content)}</div>
            ${msg.email ? `<div class="message-email">📧 ${escapeHtml(msg.email)}</div>` : ''}
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) {
        return '刚刚';
    } else if (diff < 3600000) {
        return Math.floor(diff / 60000) + '分钟前';
    } else if (diff < 86400000) {
        return Math.floor(diff / 3600000) + '小时前';
    } else {
        return date.getFullYear() + '/' + 
               String(date.getMonth() + 1).padStart(2, '0') + '/' + 
               String(date.getDate()).padStart(2, '0') + ' ' + 
               String(date.getHours()).padStart(2, '0') + ':' + 
               String(date.getMinutes()).padStart(2, '0');
    }
}

function submitMessage(event) {
    event.preventDefault();
    
    const name = document.getElementById('messageName').value.trim();
    const email = document.getElementById('messageEmail').value.trim();
    const content = document.getElementById('messageContent').value.trim();
    
    if (!name || !content) {
        alert('请填写姓名和留言内容！');
        return;
    }
    
    const message = {
        name: name,
        email: email,
        content: content,
        timestamp: Date.now()
    };
    
    messages.unshift(message);
    saveMessages();
    renderMessages();
    
    document.getElementById('messageForm').reset();
    
    alert('留言发送成功！感谢您的留言！');
}

function clearMessages() {
    if (confirm('确定要清空所有留言吗？此操作无法撤销！')) {
        messages = [];
        saveMessages();
        renderMessages();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadMessages();
    
    const form = document.getElementById('messageForm');
    if (form) {
        form.addEventListener('submit', submitMessage);
    }
});
