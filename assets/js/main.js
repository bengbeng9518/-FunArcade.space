// 评分系统
function initRating() {
    const ratingButtons = document.querySelectorAll('.star-rating button');
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 处理评分逻辑
        });
    });
}

// 评论系统
function initComments() {
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // 处理评论提交逻辑
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initRating();
    initComments();
}); 