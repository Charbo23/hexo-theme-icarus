$('#toc').on("click", ".toc-item", function() {
    var target = this.getAttribute("data-href");
    $('html, body').animate({ scrollTop: $(target).offset().top-70 }, 600);
    window.location.hash = target;
    //todo:返回事件无法回到原位置
});
