const responses = {
    '你现在在做什么？': '我目前正在搭建自己的个人主页，整理作品集，同时也在准备简历。作为机器人工程专业的学生，我也在持续学习AI应用和vibecoding。',
    '你有哪些项目？': '我主要有两个项目：1. 陶瓷粉末压铸成型自动下料设备控制系统设计（第一主持人），获得了全国三维数字化创新设计大赛国家一等奖；2. 基于计算机视觉与ROS的自主智能巡检机器人系统（主要成员），获得了中国机器人及人工智能大赛全国三等奖。详情可以查看页面上的项目经历部分！',
    '你有哪些作品？': '我主要有两个项目：1. 陶瓷粉末压铸成型自动下料设备控制系统设计（第一主持人），获得了全国三维数字化创新设计大赛国家一等奖；2. 基于计算机视觉与ROS的自主智能巡检机器人系统（主要成员），获得了中国机器人及人工智能大赛全国三等奖。详情可以查看页面上的项目经历部分！',
    '怎么联系你？': '你可以通过这个个人主页上的联系方式找到我，或者通过我们共同的朋友介绍。我很期待和志同道合的朋友交流！'
};

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    input.value = '';

    setTimeout(() => {
        const response = responses[message] || generateResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function sendQuickQuestion(question) {
    document.getElementById('userInput').value = question;
    sendMessage();
}

function addMessage(text, type) {
    const container = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;
    messageDiv.textContent = text;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('项目') || lowerMessage.includes('作品') || lowerMessage.includes('经历')) {
        return '我主要有两个项目：1. 陶瓷粉末压铸成型自动下料设备控制系统设计（第一主持人），获得了全国三维数字化创新设计大赛国家一等奖；2. 基于计算机视觉与ROS的自主智能巡检机器人系统（主要成员），获得了中国机器人及人工智能大赛全国三等奖。详情可以查看页面上的项目经历部分！';
    } else if (lowerMessage.includes('plc') || lowerMessage.includes('陶瓷') || lowerMessage.includes('下料')) {
        return '我在"陶瓷粉末压铸成型自动下料设备控制系统设计"项目中担任第一主持人，负责基于PLC+HMI+伺服控制的自动化下料系统设计，系统定位精度达±0.5mm，还获得了全国一等奖呢！';
    } else if (lowerMessage.includes('ros') || lowerMessage.includes('巡检') || lowerMessage.includes('机器人') && lowerMessage.includes('视觉')) {
        return '我参与了"基于计算机视觉与ROS的自主智能巡检机器人系统"项目，负责系统集成与调试，使用Gmapping SLAM和YOLOv5进行巡检目标检测，获得了全国三等奖！';
    } else if (lowerMessage.includes('兴趣') || lowerMessage.includes('爱好')) {
        return '我的兴趣是国画和乒乓球。国画让我静心感受传统美学，乒乓球则锻炼我的反应力和专注力。';
    } else if (lowerMessage.includes('专业') || lowerMessage.includes('机器人')) {
        return '我是机器人工程专业的大三学生，对机器人领域和AI领域的前瞻技术很感兴趣，也在学习AI vibecoding。';
    } else if (lowerMessage.includes('特点') || lowerMessage.includes('擅长')) {
        return '我比较擅长内容表达和知识整理，有一个特点是喜欢把复杂问题讲成人话，让更多人能理解。';
    } else if (lowerMessage.includes('奖项') || lowerMessage.includes('荣誉') || lowerMessage.includes('获奖')) {
        return '我获得过第十七届全国三维数字化创新设计大赛国家一等奖、江苏赛区特等奖，还有第二十六届中国机器人及人工智能大赛全国三等奖、江苏赛区二等奖，另外还申请了两项软件著作权！';
    } else {
        return '这是一个很好的问题！关于这个话题，我还在整理更多信息。你可以试试问我预设的问题，比如"你现在在做什么？"、"你有哪些项目？"或者"怎么联系你？"';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function clearChat() {
    const container = document.getElementById('chatContainer');
    container.innerHTML = '';
}
