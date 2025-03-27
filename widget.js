(function() {
  var style = document.createElement('style');
  style.textContent = `
    #ai-widget-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-family: Arial, sans-serif;
      z-index: 9999;
    }
    #ai-widget-toggle {
      width: 60px;
      height: 60px;
      background: #8540F5;
      color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      position: relative;
      overflow: hidden;
    }
    #ai-widget-toggle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    #ai-widget-toggle span {
      position: absolute;
      color: white;
      font-weight: bold;
      z-index: 2;
    }
    #ai-widget {
      width: 320px;
      height: 400px;
      background: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    #ai-widget header {
      background: #8540F5;
      color: #fff;
      padding: 10px;
      text-align: center;
      position: relative;
      border-radius: 4px 4px 0 0;
    }
    #ai-widget header .ai-widget-close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  var container = document.createElement('div');
  container.id = 'ai-widget-container';
  
  var toggleButton = document.createElement('div');
  toggleButton.id = 'ai-widget-toggle';
  
  var img = document.createElement('img');
  img.src = 'logo.png'; // Atualize para a URL da sua imagem
  img.alt = 'Chat IA';
  
  var span = document.createElement('span');
  span.textContent = 'Chat';
  
  toggleButton.appendChild(img);
  toggleButton.appendChild(span);
  container.appendChild(toggleButton);
  
  var chatWidget = document.createElement('div');
  chatWidget.id = 'ai-widget';
  chatWidget.style.display = 'none';
  
  var header = document.createElement('header');
  header.innerHTML = 'Chat IA <span class="ai-widget-close">×</span>';
  chatWidget.appendChild(header);
  
  var iframe = document.createElement('iframe');
  // Substitua pela URL do seu GitHub Pages
  iframe.src = 'https://rsuperbi.github.io/widgetteste/';
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100% - 40px)';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '0 0 4px 4px';
  
  chatWidget.appendChild(iframe);
  container.appendChild(chatWidget);
  document.body.appendChild(container);
  
  toggleButton.addEventListener('click', function() {
    chatWidget.style.display = 'flex';
    toggleButton.style.display = 'none';
    span.style.display = 'none';
  });
  
  chatWidget.querySelector('.ai-widget-close').addEventListener('click', function() {
    chatWidget.style.display = 'none';
    toggleButton.style.display = 'flex';
    span.style.display = 'block';
  });
})();
