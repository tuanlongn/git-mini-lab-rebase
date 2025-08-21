# Todo App - Git Rebase Demo

## Mô tả
Ứng dụng Todo đơn giản được viết bằng TypeScript, được thiết kế đặc biệt để demo việc thực hiện Git rebase và giải quyết conflict trong hoạt động nhóm.

## Tính năng
- ✅ Thêm todo mới
- ✅ Hiển thị danh sách todos
- ✅ Đánh dấu hoàn thành/chưa hoàn thành
- ✅ Xóa todo
- 📊 Đếm số lượng todos

## Cài đặt và Chạy

```bash
# Cài đặt dependencies
npm install

# Build TypeScript
npm run build

# Chạy ứng dụng
npm start

# Hoặc build và chạy cùng lúc
npm run dev
```

## Mục đích Demo
Repository này được tạo để thực hành:
- Git rebase khi có conflict
- Giải quyết merge conflict
- Làm việc nhóm với Git workflow
- Tạo Pull Request với rebase

## Git Commands Hữu ích

```bash
# Tạo và chuyển sang branch mới
git checkout -b featureA

# Rebase branch hiện tại với main
git rebase main

# Tiếp tục rebase sau khi giải quyết conflict
git rebase --continue

# Hủy rebase
git rebase --abort

# Xem trạng thái rebase
git status
```