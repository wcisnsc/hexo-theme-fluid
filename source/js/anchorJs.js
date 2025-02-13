document.addEventListener("DOMContentLoaded", function() {
    // 遍历每个标题元素(h1到h6)
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(header) {
        // 获取标题级别
        var level = parseInt(header.tagName.charAt(1));
        
        // 创建相应数量的#号作为前缀
        var hashPrefix = Array(level + 1).join("#") + " "; // 加入一个空格以便与文本分开
        
        // 创建一个新的span元素用于包含前缀
        var prefixSpan = document.createElement('span');
        prefixSpan.className = 'header-prefix'; // 可以为前缀添加样式类
        prefixSpan.textContent = hashPrefix;

        // 将新的span元素插入到标题文本之前
        header.insertBefore(prefixSpan, header.firstChild);
    });
});