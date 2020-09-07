const Cards = document.querySelectorAll('.cards'); /// take classname
let hasFlipped = false; // choosed?
let LockBoard = false;
let first_Card, second_Card; // first and second card
let count = 0;


function Flip() {
    if (LockBoard || this == first_Card) {
        /// Nếu bị khóa thì ko thực hiện các bước tiếp theo
        /// Hoặc nếu 1 thẻ bị click 2 lần thì ko thực hiện các bước tiếp theo
        return;
    }
    this.classList.add('flip'); // add classname

    if (!hasFlipped) { /// Nếu chưa click
        // First card
        hasFlipped = true;
        first_Card = this; /// first card bằng card hiện tại
    } else {
        // second card
        //hasFlipped = false;
        second_Card = this /// second card bằng card hiện tại

        /// Kiểm tra giống không
        if (first_Card.dataset.type == second_Card.dataset.type) { /// Nếu 2 card giống nhau
            first_Card.removeEventListener('click', Flip); /// Xóa sự kiện 
            second_Card.removeEventListener('click', Flip); /// Xóa sự kiện
            first_Card.classList.add('Yup'); /// thêm class để mất card
            second_Card.classList.add('Yup');/// thêm class để mất card

            count++; /// đúng 8 lần thì hiện thông báo
            if (count == 8) {
                alert("Congratulation");
                return;
            }
            Reset();

        } else {
            LockBoard = true;

            setTimeout(() => {
                first_Card.classList.remove('flip');
                second_Card.classList.remove('flip');
                //Lock = false
                Reset();

            }, 1000);
        }

    }
}

function Reset() {
    /// sau mỗi lần chọn 2 card dù đúng hoặc ko 
    /// thì các giá trị được reset về giá trị ban đầu 
    [LockBoard, hasFlipped] = [false, false];
    [first_Card, second_Card] = [null, null]
}


Cards.forEach(card => card.addEventListener('click', Flip)); /// mỗi card được thêm sự kiện