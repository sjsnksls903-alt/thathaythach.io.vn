# 🤖 Hướng Dẫn Cài Đặt Telegram Bot

## Bước 1: Tạo Telegram Bot

1. Mở Telegram, tìm **@BotFather**
2. Gửi lệnh `/newbot`
3. Đặt tên bot (ví dụ: "Thật Hay Thách Admin")
4. Đặt username bot (ví dụ: `thathaythach_bot`)
5. **Lưu lại Bot Token** được cấp

## Bước 2: Lấy User ID của bạn

1. Mở Telegram, tìm **@userinfobot**
2. Gửi tin nhắn bất kỳ
3. Bot sẽ trả về User ID của bạn (dạng số)

## Bước 3: Cấu hình Backend

Mở file `api/config.php` và cập nhật:

```php
// Thay YOUR_BOT_TOKEN_HERE bằng token từ BotFather
define('TELEGRAM_BOT_TOKEN', '123456789:ABCdefGHIjklMNOpqrsTUVwxyz');

// Thay 123456789 bằng User ID của bạn
define('ADMIN_USER_IDS', [
    123456789,
]);

// Thêm domain của bạn vào danh sách
define('ALLOWED_ORIGINS', [
    'http://localhost:8080',
    'https://yourdomain.com'
]);
```

## Bước 4: Upload lên Server

Upload các thư mục sau lên hosting:
- `/api/` - chứa các file PHP
- `/data/` - chứa file JSON (cấp quyền ghi 755)

## Bước 5: Đăng ký Webhook

Gọi URL sau (thay thế với thông tin của bạn):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://yourdomain.com/api/telegram-webhook.php
```

Hoặc dùng curl:
```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://yourdomain.com/api/telegram-webhook.php"
```

## Bước 6: Test Bot

Gửi các lệnh đến bot:
- `/start` - Xem hướng dẫn
- `/modes` - Xem danh sách modes
- `/add thach-nang questions Câu hỏi test` - Thêm câu hỏi
- `/list thach-nang` - Xem danh sách

## Các Lệnh Bot

| Lệnh | Mô tả |
|------|-------|
| `/start` | Hiển thị hướng dẫn |
| `/modes` | Xem các mode game |
| `/add [mode] [type] [nội dung]` | Thêm câu hỏi |
| `/list [mode]` | Xem danh sách câu hỏi |
| `/delete [mode] [type] [số]` | Xóa câu hỏi |

### Modes có sẵn:
- `thach-nang` - 😈 Thách Nặng
- `tre-em` - 👶 Trẻ Em
- `team-building` - 🏢 Team Building
- `cap-doi` - 💘 Cặp Đôi

### Types có sẵn:
- `questions` - Câu hỏi (Thật)
- `tasks` - Nhiệm vụ (Thách)
- `special` - Đặc biệt

## Ví dụ Thêm Câu Hỏi

```
/add thach-nang questions Bạn đã từng nói dối bao nhiêu lần hôm nay?
/add tre-em tasks Nhảy như con thỏ 10 lần
/add cap-doi special Hôn má người ấy ngay bây giờ!
```

## Troubleshooting

### Bot không phản hồi?
- Kiểm tra Bot Token có đúng không
- Kiểm tra webhook đã đăng ký thành công chưa
- Xem file log: `/data/webhook.log`

### Lỗi quyền ghi file?
- Cấp quyền ghi cho thư mục `/data/`: `chmod 755 data/`

### Game không load câu hỏi mới?
- Kiểm tra API: `https://yourdomain.com/api/questions.php`
- Kiểm tra Console trình duyệt (F12) xem có lỗi CORS không
