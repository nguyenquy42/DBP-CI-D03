const addButton = document.querySelector(".addButton"); /// lấy class đầu tiên
const list = document.querySelector(".list"); /// tương tự
var mess = document.querySelector(".input"); /// tương tự

class items {
    /// create a new thing
    constructor(New_Item) {
        this.Create(New_Item);
    }

    Create(New_Item) {
        /// create div and add className
        let box = document.createElement('div');
        box.classList.add('items');

        /// create a checkbox and class name
        let check = document.createElement('checkbox');
        check.classList.add('myCheck');

        /// create input and another things :)
        let input = document.createElement('input');
        input.value = New_Item;
        input.disabled = true;
        input.type = Text;
        input.classList.add('form-control');

        /// create button to edit
        let editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        editButton.classList.add('btn-dark');

        /// create button to remove
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove"
        removeButton.classList.add('btn-danger')

        /// thêm một thẻ div vào thẻ list
        list.appendChild(box);

        /// sau khi tạo thì thêm vào thẻ cần thiết
        box.appendChild(check);
        box.appendChild(input);
        box.appendChild(editButton);
        box.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input))

        removeButton.addEventListener('click', () => this.remove(box))
    }

    /// hàm sửa
    edit(input) {
        input.disabled = !input.disabled;
        input.focus();
    }

    /// hàm xóa
    remove(box) {
        list.removeChild(box);
    }

}

function Check_Input() {
    if (mess.value != "") {
        new items(mess.value);
        mess.value = "";
    }
}


addButton.addEventListener('click', Check_Input)