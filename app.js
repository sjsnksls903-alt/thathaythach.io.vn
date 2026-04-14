// ===== GAME DATA =====
const gameData = {
    'thach-nang': {
        name: '😈 Thách Nặng',
        questions: [
            'Bí mật nào bạn chưa từng kể với ai trong phòng này?',
            'Lần gần nhất bạn nói dối là khi nào?',
            'Bạn từng thích người yêu cũ của bạn thân chưa?',
            'Điều xấu hổ nhất bạn từng làm nơi đông người?',
            'Nếu phải chọn 1 người trong phòng để hoán đổi cuộc sống, bạn chọn ai?',
            'Crush đầu tiên của bạn là ai? Kể về họ!',
            'Điều gì khiến bạn khóc gần đây nhất?',
            'Bạn từng làm điều gì mà giờ vẫn hối hận?',
            'Nếu có thể xóa 1 ký ức, bạn sẽ xóa gì?',
            'Người trong phòng này ai làm bạn khó chịu nhất và vì sao?'
        ],
        tasks: [
            'Gọi cho 1 người bất kỳ và nói: "Tao nhớ mày!"',
            'Đứng lên bắt chước 1 người trong phòng (không nói tên)',
            'Nhảy sexy dance trong 30 giây',
            'Hát 1 bài hát mà không được cười',
            'Đăng 1 story cực cringe lên Instagram',
            'Gửi tin nhắn "Anh/Em vẫn còn thích bạn" cho crush cũ',
            'Để người khác đọc tin nhắn gần nhất của bạn',
            'Tỏ tình với 1 người trong phòng theo cách lãng mạn nhất'
        ],
        challenges: [
            'Cả đội phải tạo dáng làm bức tranh sống trong 10 giây',
            'Một người bịt mắt, người khác hướng dẫn đi qua chướng ngại vật',
            'Hát 1 bài hát mà thay tất cả lời bằng "meow"',
            'Đoán bài hát qua tiếng ú ớ của đồng đội',
            'Diễn kịch câm 1 tình huống hẹn hò',
            'Nhảy TikTok dance challenge mà không được luyện tập trước'
        ],
        special: [
            '🔥 TRUTH OR SHOT: Trả lời thật hoặc uống 1 ly',
            '💀 Kể câu chuyện đáng xấu hổ nhất đời bạn',
            '🎭 Nhập vai làm người yêu của 1 người trong phòng trong 2 phút',
            '📱 Để người khác gửi tin nhắn từ điện thoại của bạn',
            '🤫 Tiết lộ 1 bí mật chưa ai biết'
        ]
    },
    'tre-em': {
        name: '👶 Trẻ Em',
        questions: [
            'Nếu con là siêu anh hùng, con sẽ bảo vệ điều gì?',
            'Con thích chơi với bạn nào nhất và vì sao?',
            'Con muốn có con vật gì làm bạn?',
            'Điều gì làm con vui nhất mỗi ngày?',
            'Khi buồn, con thường làm gì?',
            'Con mơ thấy gì gần đây nhất?',
            'Nếu có phép màu, con ước điều gì?',
            'Món ăn nào con thích nhất?',
            'Con thích hoạt hình nào nhất?',
            'Nếu được đi du lịch, con muốn đi đâu?'
        ],
        tasks: [
            'Nhảy tại chỗ 10 lần',
            'Làm mặt cười thật to 😄',
            'Bắt chước tiếng con vật mà bạn thích',
            'Vẽ 1 hình trên không khí',
            'Hát 1 câu bài hát con thích',
            'Chạy vòng quanh phòng 1 lần',
            'Làm động tác siêu anh hùng',
            'Kể 1 câu chuyện hài hước'
        ],
        challenges: [
            '🎨 Vẽ tranh và đoán hình',
            '🏃 Chạy tiếp sức vòng quanh phòng',
            '🎵 Hát theo nhạc và nhảy múa',
            '🧩 Xếp hình nhanh nhất',
            '🤹 Tung bắt bóng liên tục 10 lần',
            '🎭 Diễn cảnh trong phim hoạt hình yêu thích'
        ],
        special: [
            '⭐ Làm vua/nữ hoàng trong 1 phút - mọi người phải nghe lời',
            '🎁 Nhận được quyền chọn phần thưởng đặc biệt',
            '🌟 Được quyền đổi câu hỏi cho đội khác',
            '🎉 Cả đội cùng nhảy điệu nhảy yêu thích'
        ]
    },
    'team-building': {
        name: '🏢 Team Building',
        questions: [
            'Điều gì giúp bạn làm việc tốt hơn mỗi ngày?',
            'Bạn mong đồng đội hiểu bạn ở điểm nào?',
            'Nếu cải thiện 1 điều trong công việc, bạn chọn gì?',
            'Theo bạn, một team mạnh cần yếu tố nào nhất?',
            'Một điều bạn đánh giá cao ở đồng đội?',
            'Kỹ năng nào bạn muốn học thêm?',
            'Thành tựu nào bạn tự hào nhất trong công việc?',
            'Bạn thích được ghi nhận như thế nào?',
            'Điều gì motivate bạn làm việc mỗi ngày?',
            'Nếu có thể thay đổi 1 điều ở công ty, bạn sẽ thay đổi gì?'
        ],
        tasks: [
            'Khen 1 đồng nghiệp cụ thể',
            'Chia sẻ 1 thói quen làm việc hiệu quả',
            'Nói lời cảm ơn chân thành với sếp/đồng nghiệp',
            'Kể 1 kỷ niệm vui với team',
            'Đề xuất 1 ý tưởng cải thiện quy trình',
            'Nhận xét tích cực về 1 dự án gần đây',
            'Chia sẻ 1 bài học từ sai lầm trong công việc',
            'Mô tả công việc của mình bằng 1 câu hài hước'
        ],
        challenges: [
            '📊 Thuyết trình ý tưởng trong 60 giây',
            '🤝 Brainstorm giải pháp cho 1 vấn đề',
            '🎯 Xếp hạng ưu tiên task trong 2 phút',
            '💡 Pitch ý tưởng startup điên rồ nhất',
            '📝 Viết email chuyên nghiệp trong 1 phút',
            '🗣️ Thuyết phục team trong 30 giây'
        ],
        special: [
            '🏆 Team nào thắng được CEO/Manager thực hiện 1 điều',
            '🎖️ Trao giải "Đồng nghiệp xuất sắc" cho 1 người',
            '📢 Được quyền đề xuất 1 policy mới',
            '🎉 Team thua phải pha trà/cà phê cho team thắng'
        ]
    },
    'cap-doi': {
        name: '💘 Cặp Đôi',
        questions: [
            'Khoảnh khắc nào khiến bạn biết mình yêu người kia?',
            'Điều gì người ấy làm khiến bạn tổn thương nhưng ít khi nói?',
            'Bạn sợ mất người ấy nhất trong trường hợp nào?',
            'Điều bạn trân trọng nhất ở mối quan hệ này?',
            'Nếu nói 1 điều cho tương lai tụi mình, bạn sẽ nói gì?',
            'Điều gì bạn muốn thay đổi ở bản thân vì người ấy?',
            'Kỷ niệm đẹp nhất của 2 người là gì?',
            'Bạn thích nhất điều gì ở người ấy?',
            'Điều gì làm bạn ghen nhất?',
            'Nếu được quay lại quá khứ, bạn sẽ thay đổi điều gì trong mối quan hệ?'
        ],
        tasks: [
            'Nắm tay nhau 30 giây và không nói gì',
            'Nói 1 lời cảm ơn thật lòng',
            'Hôn má người ấy',
            'Nhìn vào mắt nhau 1 phút không cười',
            'Ôm nhau trong 20 giây',
            'Viết 1 điều yêu ở người ấy lên giấy',
            'Kể lại lần đầu gặp nhau',
            'Hứa 1 điều sẽ làm cho người ấy tuần này'
        ],
        challenges: [
            '💑 Đoán ý nghĩ của nhau trong 5 câu hỏi',
            '🎵 Cùng hát 1 bài tình ca',
            '🕺 Khiêu vũ cùng nhau trong 1 phút',
            '📸 Tạo dáng chụp ảnh như couple goals',
            '🎭 Diễn lại cảnh phim tình cảm',
            '✍️ Viết thư tình cho nhau trong 2 phút'
        ],
        special: [
            '💍 Nói 1 điều bạn muốn cùng nhau đạt được',
            '💕 Kể khoảnh khắc bạn yêu người ấy nhất',
            '🌹 Tạo 1 kỷ niệm đặc biệt ngay bây giờ',
            '💝 Lên kế hoạch date tiếp theo ngay tại đây'
        ]
    }
};

// ===== API CONFIGURATION =====
// Update this URL to your server's API endpoint
const API_CONFIG = {
    baseUrl: '', // Leave empty to use same domain, or set like 'https://yourdomain.com/api'
    questionsEndpoint: '/api/questions.php',
    enabled: false // Set to false to disable API fetching
};

// ===== FETCH CUSTOM QUESTIONS FROM API =====
async function fetchCustomQuestions() {
    if (!API_CONFIG.enabled) return;

    try {
        const url = API_CONFIG.baseUrl + API_CONFIG.questionsEndpoint;
        const response = await fetch(url);

        if (!response.ok) {
            console.log('📡 API not available, using default questions');
            return;
        }

        const data = await response.json();

        if (data.success && data.data) {
            // Merge custom questions with default gameData
            Object.keys(data.data).forEach(mode => {
                if (gameData[mode]) {
                    ['questions', 'tasks', 'special'].forEach(type => {
                        if (data.data[mode][type] && data.data[mode][type].length > 0) {
                            // Add custom questions to existing ones
                            gameData[mode][type] = [
                                ...gameData[mode][type],
                                ...data.data[mode][type]
                            ];
                        }
                    });
                }
            });

            console.log('✅ Custom questions loaded from API');
        }
    } catch (error) {
        console.log('📡 Could not fetch custom questions:', error.message);
    }
}

// Fetch custom questions on page load
fetchCustomQuestions();

const teamColors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b'];

// ===== GAME STATE =====
const playerAvatars = ['😊', '😎', '🤩', '🥳', '😜', '🤗', '😈', '🦸', '🧛', '🧜'];

let gameState = {
    currentStep: 0,
    selectedMode: null,
    teams: [],
    currentPlayerIndex: 0,
    usedQuestions: [],
    usedTasks: [],
    usedChallenges: [],
    usedSpecial: [],
    doublePointsActive: false,
    stealPointsActive: false
};

// ===== DOM ELEMENTS =====
const elements = {
    steps: document.querySelectorAll('.step'),
    sections: document.querySelectorAll('.game-section'),
    modeCards: document.querySelectorAll('.mode-card'),
    currentModeBadge: document.getElementById('currentModeBadge'),
    teamsContainer: document.getElementById('teamsContainer'),
    teamCount: document.getElementById('teamCount'),
    scorePanel: document.getElementById('scorePanel'),
    scoresDisplay: document.getElementById('scoresDisplay'),
    timerModal: document.getElementById('timerModal'),
    timerDisplay: document.getElementById('timerDisplay'),
    challengeCard: document.getElementById('challengeCard'),
    questionCard: document.getElementById('questionCard'),
    specialCard: document.getElementById('specialCard'),
    resultsContainer: document.getElementById('resultsContainer'),
    winnerAnnouncement: document.getElementById('winnerAnnouncement'),
    scoreModal: document.getElementById('scoreModal'),
    scoreEdit: document.getElementById('scoreEdit')
};

// ===== INITIALIZATION =====
function init() {
    setupEventListeners();
    generateTeamInputs();
    updateStepDisplay();
}

function setupEventListeners() {
    // Mode selection
    elements.modeCards.forEach(card => {
        card.addEventListener('click', () => selectMode(card.dataset.mode));
    });

    // Team count
    document.getElementById('decreaseTeam').addEventListener('click', () => changeTeamCount(-1));
    document.getElementById('increaseTeam').addEventListener('click', () => changeTeamCount(1));

    // Start game
    document.getElementById('startGame').addEventListener('click', startGame);

    // Navigation
    document.getElementById('toStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('toStep3').addEventListener('click', () => goToStep(3));
    document.getElementById('playAgain').addEventListener('click', resetGame);

    // Actions
    document.getElementById('randomQuestion').addEventListener('click', randomQuestion);
    document.getElementById('randomTask').addEventListener('click', randomTask);
    document.getElementById('randomSpecial').addEventListener('click', randomSpecial);
    document.getElementById('startTimer').addEventListener('click', () => openTimerModal());
    document.getElementById('nextTurn').addEventListener('click', nextTurn);

    // Power-ups
    document.getElementById('doublePoints').addEventListener('click', activateDoublePoints);
    document.getElementById('stealPoints').addEventListener('click', activateStealPoints);

    // Timer controls
    document.getElementById('timer30').addEventListener('click', () => setTimerDuration(30));
    document.getElementById('timer60').addEventListener('click', () => setTimerDuration(60));
    document.getElementById('timer90').addEventListener('click', () => setTimerDuration(90));
    document.getElementById('timerStart').addEventListener('click', startTimer);
    document.getElementById('closeTimer').addEventListener('click', closeTimerModal);

    // Score modal
    document.getElementById('closeScore').addEventListener('click', closeScoreModal);

    // Click on scores to edit
    elements.scoresDisplay.addEventListener('click', openScoreModal);

    // Progress nav clicks
    elements.steps.forEach(step => {
        step.addEventListener('click', () => {
            if (gameState.teams.length > 0) {
                goToStep(parseInt(step.dataset.step));
            }
        });
    });
}

// ===== MODE SELECTION =====
function selectMode(mode) {
    gameState.selectedMode = mode;
    elements.modeCards.forEach(card => {
        card.classList.toggle('selected', card.dataset.mode === mode);
    });
    elements.currentModeBadge.textContent = gameData[mode].name;
}

// ===== PLAYER MANAGEMENT =====
function changeTeamCount(delta) {
    let count = parseInt(elements.teamCount.textContent);
    count = Math.max(2, Math.min(10, count + delta));
    elements.teamCount.textContent = count;
    generateTeamInputs();
}

function generateTeamInputs() {
    const count = parseInt(elements.teamCount.textContent);
    elements.teamsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team-input';
        teamDiv.innerHTML = `
            <input type="text" id="team${i}" placeholder="Người chơi ${i + 1}" value="Người chơi ${i + 1}">
            <div class="team-color">
                <span class="team-color-dot" style="background: ${teamColors[i % teamColors.length]}">${playerAvatars[i % playerAvatars.length]}</span>
            </div>
        `;
        elements.teamsContainer.appendChild(teamDiv);
    }
}

// ===== GAME FLOW =====
function startGame() {
    if (!gameState.selectedMode) {
        alert('Vui lòng chọn phiên bản game!');
        return;
    }

    // Collect player names
    const count = parseInt(elements.teamCount.textContent);
    gameState.teams = [];
    gameState.currentPlayerIndex = 0;

    for (let i = 0; i < count; i++) {
        const input = document.getElementById(`team${i}`);
        gameState.teams.push({
            name: input.value || `Người chơi ${i + 1}`,
            color: teamColors[i % teamColors.length],
            avatar: playerAvatars[i % playerAvatars.length],
            score: 0
        });
    }

    // Show score panel
    elements.scorePanel.classList.add('visible');
    updateScoreDisplay();
    updateCurrentPlayerDisplay();

    // Go to step 1
    goToStep(1);
}

// ===== PLAYER TURN MANAGEMENT =====
function updateCurrentPlayerDisplay() {
    const currentPlayer = gameState.teams[gameState.currentPlayerIndex];
    if (!currentPlayer) return;

    const nameEl = document.getElementById('currentPlayerName');
    const avatarEl = document.getElementById('currentPlayerAvatar');

    if (nameEl) nameEl.textContent = currentPlayer.name;
    if (avatarEl) avatarEl.textContent = currentPlayer.avatar;

    // Add animation
    const indicator = document.getElementById('playerTurnIndicator');
    if (indicator) {
        indicator.style.animation = 'none';
        indicator.offsetHeight; // Trigger reflow
        indicator.style.animation = 'turnPulse 2s ease-in-out infinite';
    }
}

function nextTurn() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.teams.length;
    updateCurrentPlayerDisplay();

    // Reset question card to default state
    elements.questionCard.innerHTML = `
        <div class="card-badge">Câu hỏi / Nhiệm vụ</div>
        <div class="card-content">
            <p class="card-text">Chọn Thật hoặc Thách để bắt đầu!</p>
        </div>
    `;

    // Show toast for new turn
    const currentPlayer = gameState.teams[gameState.currentPlayerIndex];
    showToast(currentPlayer.avatar, 'Đến Lượt!', currentPlayer.name, 'celebration');

    // Play turn change sound
    playSound('newTurn');
}

function goToStep(step) {
    gameState.currentStep = step;
    updateStepDisplay();

    if (step === 3) {
        showResults();
    }
}

function updateStepDisplay() {
    // Update progress nav
    elements.steps.forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        if (index === gameState.currentStep) {
            stepEl.classList.add('active');
        } else if (index < gameState.currentStep) {
            stepEl.classList.add('completed');
        }
    });

    // Update sections
    elements.sections.forEach((section, index) => {
        section.classList.toggle('active', index === gameState.currentStep);
    });
}

// ===== RANDOM FUNCTIONS =====
function getRandomItem(array, usedArray) {
    const available = array.filter((_, i) => !usedArray.includes(i));
    if (available.length === 0) {
        // Reset if all items used
        usedArray.length = 0;
        return getRandomItem(array, usedArray);
    }
    const index = array.indexOf(available[Math.floor(Math.random() * available.length)]);
    usedArray.push(index);
    return array[index];
}

function randomChallenge() {
    const mode = gameState.selectedMode;
    const challenge = getRandomItem(gameData[mode].challenges, gameState.usedChallenges);

    elements.challengeCard.innerHTML = `
        <div class="card-content">
            <span class="card-emoji">⚡</span>
            <p class="card-text">${challenge}</p>
        </div>
    `;

    animateCard(elements.challengeCard);
}

function randomQuestion() {
    const mode = gameState.selectedMode;
    const question = getRandomItem(gameData[mode].questions, gameState.usedQuestions);

    elements.questionCard.innerHTML = `
        <div class="card-badge">Câu hỏi</div>
        <div class="card-content">
            <span class="card-emoji">🤔</span>
            <p class="card-text">${question}</p>
        </div>
    `;

    animateCard(elements.questionCard);
}

function randomTask() {
    playSound('cardReveal');
    const mode = gameState.selectedMode;
    const task = getRandomItem(gameData[mode].tasks, gameState.usedTasks);

    elements.questionCard.innerHTML = `
        <div class="card-badge" style="background: var(--accent-4)">Nhiệm vụ</div>
        <div class="card-content">
            <span class="card-emoji">🎭</span>
            <p class="card-text">${task}</p>
        </div>
    `;

    animateCard(elements.questionCard);
}

function randomSpecial() {
    const mode = gameState.selectedMode;
    const special = getRandomItem(gameData[mode].special, gameState.usedSpecial);

    elements.specialCard.innerHTML = `
        <div class="card-badge special">⭐ Đặc Biệt</div>
        <div class="card-content">
            <span class="card-emoji">🌟</span>
            <p class="card-text">${special}</p>
        </div>
    `;

    animateCard(elements.specialCard);
}

function animateCard(card) {
    card.style.animation = 'none';
    card.offsetHeight; // Trigger reflow
    card.style.animation = 'fadeIn 0.5s ease';
}

// ===== POWER-UPS =====
function activateDoublePoints() {
    gameState.doublePointsActive = true;
    document.getElementById('doublePoints').style.background = 'var(--accent-2)';
    document.getElementById('doublePoints').style.color = 'white';
    document.getElementById('doublePoints').textContent = '✨ ĐANG KÍCH HOẠT x2';
}

function activateStealPoints() {
    gameState.stealPointsActive = true;
    document.getElementById('stealPoints').style.background = 'var(--accent-3)';
    document.getElementById('stealPoints').style.color = 'white';
    document.getElementById('stealPoints').textContent = '🔥 ĐANG KÍCH HOẠT';
    openScoreModal();
}

// ===== TIMER =====
let timerInterval = null;
let timerDuration = 60;
let timerRunning = false;

function openTimerModal() {
    elements.timerModal.classList.add('active');
    elements.timerDisplay.textContent = timerDuration;
    elements.timerDisplay.classList.remove('warning');
    timerRunning = false;
    document.getElementById('timerStart').textContent = '▶️ Bắt Đầu';
}

function closeTimerModal() {
    elements.timerModal.classList.remove('active');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function setTimerDuration(duration) {
    timerDuration = duration;
    elements.timerDisplay.textContent = duration;

    document.querySelectorAll('.btn-timer-control').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`timer${duration}`).classList.add('active');
}

function startTimer() {
    if (timerRunning) {
        // Pause
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('timerStart').textContent = '▶️ Tiếp Tục';
        return;
    }

    timerRunning = true;
    document.getElementById('timerStart').textContent = '⏸️ Tạm Dừng';

    let remaining = parseInt(elements.timerDisplay.textContent);

    timerInterval = setInterval(() => {
        remaining--;
        elements.timerDisplay.textContent = remaining;

        if (remaining <= 10) {
            elements.timerDisplay.classList.add('warning');
        }

        if (remaining <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            elements.timerDisplay.textContent = '⏰';
            document.getElementById('timerStart').textContent = '🔄 Đặt Lại';

            // Play sound effect (visual only without actual audio)
            elements.timerDisplay.style.animation = 'pulse 0.3s ease-in-out 3';
        }
    }, 1000);
}

// ===== SCORE MANAGEMENT =====
function updateScoreDisplay() {
    elements.scoresDisplay.innerHTML = gameState.teams.map((team, index) => `
        <div class="score-item" data-team="${index}">
            <span class="score-team">
                <span class="score-team-dot" style="background: ${team.color}"></span>
                ${team.name}
            </span>
            <span class="score-value">${team.score}</span>
        </div>
    `).join('');
}

function openScoreModal() {
    elements.scoreModal.classList.add('active');

    const multiplier = gameState.doublePointsActive ? 2 : 1;
    const multiplierLabel = gameState.doublePointsActive ? ' (x2)' : '';

    elements.scoreEdit.innerHTML = gameState.teams.map((team, index) => `
        <div class="score-edit-item">
            <span class="score-edit-name" style="color: ${team.color}">${team.name}: ${team.score}</span>
            <div class="score-edit-controls">
                <button class="btn-score minus" onclick="changeScore(${index}, -1)">−</button>
                <button class="btn-score plus" onclick="changeScore(${index}, 1)">+${multiplierLabel}</button>
            </div>
        </div>
    `).join('');
}

function closeScoreModal() {
    elements.scoreModal.classList.remove('active');
    // Reset power-ups
    gameState.doublePointsActive = false;
    gameState.stealPointsActive = false;
    document.getElementById('doublePoints').style.background = '';
    document.getElementById('doublePoints').style.color = '';
    document.getElementById('doublePoints').textContent = '✨ Nhân Đôi Điểm';
    document.getElementById('stealPoints').style.background = '';
    document.getElementById('stealPoints').style.color = '';
    document.getElementById('stealPoints').textContent = '🔥 Cướp Điểm';
}

function changeScore(teamIndex, delta) {
    const multiplier = gameState.doublePointsActive && delta > 0 ? 2 : 1;
    gameState.teams[teamIndex].score += delta * multiplier;
    gameState.teams[teamIndex].score = Math.max(0, gameState.teams[teamIndex].score);

    updateScoreDisplay();
    openScoreModal(); // Refresh modal
}

// ===== RESULTS =====
function showResults() {
    // Stop background music and play victory fanfare
    audioSystem.stopBgMusic();
    playSound('victory');

    // Sort teams by score
    const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);
    const winningScore = sortedTeams[0].score;

    elements.resultsContainer.innerHTML = sortedTeams.map((team, index) => `
        <div class="result-card ${team.score === winningScore ? 'winner' : ''}">
            <div class="result-name" style="color: ${team.score === winningScore ? 'white' : team.color}">
                ${team.score === winningScore ? '👑 ' : ''}${team.name}
            </div>
            <div class="result-score">${team.score}</div>
        </div>
    `).join('');

    elements.winnerAnnouncement.innerHTML = `
        <div class="winner-text">🎉 Đội Chiến Thắng 🎉</div>
        <div class="winner-name">${sortedTeams[0].name}</div>
    `;

    // Create confetti
    createConfetti();
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#ef4444'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }

    // Clear confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// ===== RESET =====
function resetGame() {
    // Stop background music
    audioSystem.stopBgMusic();

    gameState = {
        currentStep: 0,
        selectedMode: null,
        teams: [],
        usedQuestions: [],
        usedTasks: [],
        usedChallenges: [],
        usedSpecial: [],
        doublePointsActive: false,
        stealPointsActive: false
    };

    elements.modeCards.forEach(card => card.classList.remove('selected'));
    elements.currentModeBadge.textContent = 'Chọn phiên bản';
    elements.scorePanel.classList.remove('visible');
    generateTeamInputs();
    updateStepDisplay();

    // Reset cards
    elements.challengeCard.innerHTML = `
        <div class="card-content">
            <span class="card-emoji">🎯</span>
            <p class="card-text">Nhấn "Bốc Thử Thách" để bắt đầu!</p>
        </div>
    `;

    elements.questionCard.innerHTML = `
        <div class="card-badge">Câu hỏi</div>
        <div class="card-content">
            <p class="card-text">Nhấn để bốc câu hỏi!</p>
        </div>
    `;

    elements.specialCard.innerHTML = `
        <div class="card-badge special">⭐ Đặc Biệt</div>
        <div class="card-content">
            <p class="card-text">Vòng cao trào!</p>
        </div>
    `;
}

// Make changeScore available globally
window.changeScore = changeScore;

// ===== AUDIO SYSTEM =====
const audioSystem = {
    audioContext: null,
    isMuted: false,
    bgMusicPlaying: false,
    bgMusicInterval: null,
    volume: 0.3,

    init() {
        // Create audio context on first user interaction
        document.addEventListener('click', () => {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
        }, { once: true });
    },

    // Play a single note
    playNote(frequency, duration, type = 'sine', startTime = 0) {
        if (!this.audioContext || this.isMuted) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        const now = this.audioContext.currentTime + startTime;
        gainNode.gain.setValueAtTime(this.volume * 0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

        oscillator.start(now);
        oscillator.stop(now + duration);
    },

    // Play click sound
    playClick() {
        this.playNote(800, 0.1, 'square');
        this.playNote(600, 0.1, 'square', 0.05);
    },

    // Play success sound
    playSuccess() {
        this.playNote(523, 0.15, 'sine'); // C5
        this.playNote(659, 0.15, 'sine', 0.1); // E5
        this.playNote(784, 0.2, 'sine', 0.2); // G5
    },

    // Play new turn sound
    playNewTurn() {
        this.playNote(440, 0.1, 'triangle'); // A4
        this.playNote(554, 0.1, 'triangle', 0.1); // C#5
        this.playNote(659, 0.15, 'triangle', 0.2); // E5
    },

    // Play card reveal sound
    playCardReveal() {
        for (let i = 0; i < 5; i++) {
            this.playNote(300 + i * 100, 0.08, 'sine', i * 0.03);
        }
    },

    // Play victory fanfare
    playVictory() {
        const melody = [523, 523, 523, 659, 784, 659, 784];
        const durations = [0.15, 0.15, 0.15, 0.3, 0.5, 0.15, 0.6];
        let time = 0;
        melody.forEach((freq, i) => {
            this.playNote(freq, durations[i], 'square', time);
            time += durations[i] * 0.8;
        });
    },

    // Background music - fun party loop
    startBgMusic() {
        if (this.bgMusicPlaying || this.isMuted) return;

        this.bgMusicPlaying = true;

        // Simple party beat pattern
        const playBeat = () => {
            if (!this.bgMusicPlaying || this.isMuted || !this.audioContext) return;

            // Bass drum
            this.playBassDrum();

            // Hi-hat pattern
            setTimeout(() => this.playHiHat(), 250);
            setTimeout(() => this.playHiHat(), 500);
            setTimeout(() => this.playHiHat(), 750);

            // Melody notes (random fun notes)
            const melodyNotes = [262, 294, 330, 349, 392, 440, 494, 523];
            setTimeout(() => {
                const note = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
                this.playNote(note, 0.2, 'sine', 0);
            }, 125);
            setTimeout(() => {
                const note = melodyNotes[Math.floor(Math.random() * melodyNotes.length)];
                this.playNote(note, 0.15, 'sine', 0);
            }, 625);
        };

        // Play beat every 1 second (60 BPM feel)
        playBeat();
        this.bgMusicInterval = setInterval(playBeat, 1000);

        console.log('🎵 Background music started');
    },

    stopBgMusic() {
        this.bgMusicPlaying = false;
        if (this.bgMusicInterval) {
            clearInterval(this.bgMusicInterval);
            this.bgMusicInterval = null;
        }
        console.log('🔇 Background music stopped');
    },

    playBassDrum() {
        if (!this.audioContext || this.isMuted) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.1);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(this.volume * 0.5, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.15);
    },

    playHiHat() {
        if (!this.audioContext || this.isMuted) return;

        const bufferSize = this.audioContext.sampleRate * 0.05;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioContext.createBufferSource();
        const highpass = this.audioContext.createBiquadFilter();
        const gainNode = this.audioContext.createGain();

        noise.buffer = buffer;
        highpass.type = 'highpass';
        highpass.frequency.value = 8000;

        noise.connect(highpass);
        highpass.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        gainNode.gain.setValueAtTime(this.volume * 0.15, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);

        noise.start(this.audioContext.currentTime);
        noise.stop(this.audioContext.currentTime + 0.05);
    },

    toggle() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBgMusic();
        }
        return this.isMuted;
    }
};

// Initialize audio system
audioSystem.init();

// Play sound helper function
function playSound(type) {
    switch (type) {
        case 'click':
            audioSystem.playClick();
            break;
        case 'success':
            audioSystem.playSuccess();
            break;
        case 'newTurn':
            audioSystem.playNewTurn();
            break;
        case 'cardReveal':
            audioSystem.playCardReveal();
            break;
        case 'victory':
            audioSystem.playVictory();
            break;
    }
}

// Sound toggle button handler
document.getElementById('toggleSound').addEventListener('click', () => {
    const isMuted = audioSystem.toggle();
    document.getElementById('toggleSound').textContent = isMuted ? '🔇' : '🔊';

    // Also update localStorage preference
    localStorage.setItem('soundMuted', isMuted);
});

// Load sound preference
if (localStorage.getItem('soundMuted') === 'true') {
    audioSystem.isMuted = true;
    document.getElementById('toggleSound').textContent = '🔇';
}

// Initialize
init();

// ===== USER CONTRIBUTIONS SYSTEM =====
const contributionState = {
    contributions: JSON.parse(localStorage.getItem('userContributions') || '[]'),
    totalContributed: parseInt(localStorage.getItem('totalContributed') || '0'),
    gamesPlayed: parseInt(localStorage.getItem('gamesPlayed') || '0'),
    questionsAnswered: parseInt(localStorage.getItem('questionsAnswered') || '0'),
    challengesCompleted: parseInt(localStorage.getItem('challengesCompleted') || '0'),
    achievements: JSON.parse(localStorage.getItem('achievements') || '[]')
};

// Contribution modal elements
const contributeElements = {
    modal: document.getElementById('contributeModal'),
    openBtn: document.getElementById('openContribute'),
    closeBtn: document.getElementById('closeContribute'),
    modeSelect: document.getElementById('contributeMode'),
    typeSelect: document.getElementById('contributeType'),
    contentInput: document.getElementById('contributeContent'),
    submitBtn: document.getElementById('submitContribution'),
    countDisplay: document.getElementById('userContribCount'),
    itemsContainer: document.getElementById('contributedItems'),
    toastContainer: document.getElementById('toastContainer'),
    achievementPopup: document.getElementById('achievementPopup'),
    achievementIcon: document.getElementById('achievementIcon'),
    achievementTitle: document.getElementById('achievementTitle'),
    achievementDesc: document.getElementById('achievementDesc')
};

// Setup contribution event listeners
function setupContributionListeners() {
    contributeElements.openBtn.addEventListener('click', openContributeModal);
    contributeElements.closeBtn.addEventListener('click', closeContributeModal);
    contributeElements.submitBtn.addEventListener('click', submitContribution);

    // Update count display
    updateContributionDisplay();
}

function openContributeModal() {
    contributeElements.modal.classList.add('active');
    updateContributionDisplay();
}

function closeContributeModal() {
    contributeElements.modal.classList.remove('active');
    contributeElements.contentInput.value = '';
}

function submitContribution() {
    const content = contributeElements.contentInput.value.trim();
    if (!content) {
        showToast('⚠️', 'Chờ Chút!', 'Vui lòng nhập nội dung câu hỏi', 'warning');
        return;
    }

    const mode = contributeElements.modeSelect.value;
    const type = contributeElements.typeSelect.value;

    // Add to gameData
    if (gameData[mode] && gameData[mode][type]) {
        gameData[mode][type].push(content);
    }

    // Save to contributions
    const contribution = {
        id: Date.now(),
        mode: mode,
        type: type,
        content: content,
        date: new Date().toISOString()
    };

    contributionState.contributions.push(contribution);
    contributionState.totalContributed++;

    // Save to localStorage
    saveContributionState();

    // Update UI
    updateContributionDisplay();
    contributeElements.contentInput.value = '';

    // Show success toast
    showToast('✅', 'Đã Gửi!', 'Cảm ơn bạn đã góp ý tưởng!', 'success');

    // Check for achievements
    checkContributionAchievements();
}

function saveContributionState() {
    localStorage.setItem('userContributions', JSON.stringify(contributionState.contributions));
    localStorage.setItem('totalContributed', contributionState.totalContributed.toString());
    localStorage.setItem('gamesPlayed', contributionState.gamesPlayed.toString());
    localStorage.setItem('questionsAnswered', contributionState.questionsAnswered.toString());
    localStorage.setItem('challengesCompleted', contributionState.challengesCompleted.toString());
    localStorage.setItem('achievements', JSON.stringify(contributionState.achievements));
}

function updateContributionDisplay() {
    contributeElements.countDisplay.textContent = contributionState.totalContributed;

    const typeNames = {
        'questions': 'Câu hỏi',
        'tasks': 'Nhiệm vụ',
        'challenges': 'Thử thách',
        'special': 'Đặc biệt'
    };

    contributeElements.itemsContainer.innerHTML = contributionState.contributions
        .slice(-10)
        .reverse()
        .map(c => `
            <div class="contributed-item">
                <span class="contributed-item-text">${c.content}</span>
                <span class="contributed-item-badge">${typeNames[c.type] || c.type}</span>
                <button class="btn-delete-contrib" onclick="deleteContribution(${c.id})">✕</button>
            </div>
        `).join('');
}

function deleteContribution(id) {
    const index = contributionState.contributions.findIndex(c => c.id === id);
    if (index > -1) {
        contributionState.contributions.splice(index, 1);
        contributionState.totalContributed = Math.max(0, contributionState.totalContributed - 1);
        saveContributionState();
        updateContributionDisplay();
        showToast('🗑️', 'Đã Xóa', 'Câu hỏi đã được xóa', 'info');
    }
}

// Make deleteContribution available globally
window.deleteContribution = deleteContribution;

// ===== ENCOURAGEMENT SYSTEM =====
const encouragementMessages = {
    gameStart: [
        { icon: '🎉', title: 'Bắt Đầu Thôi!', message: 'Chúc các đội có trận đấu vui vẻ!' },
        { icon: '🔥', title: 'Sẵn Sàng Chưa?', message: 'Đã đến lúc thể hiện rồi!' },
        { icon: '⚡', title: 'Let\'s Go!', message: 'Trận game huyền thoại bắt đầu!' }
    ],
    challenge: [
        { icon: '💪', title: 'Cố Lên!', message: 'Các bạn làm được mà!' },
        { icon: '🌟', title: 'Tuyệt Vời!', message: 'Thử thách này dễ thôi!' },
        { icon: '🎯', title: 'Tập Trung!', message: 'Phối hợp nhóm là chìa khóa!' }
    ],
    question: [
        { icon: '🤔', title: 'Thành Thật Nhé!', message: 'Câu trả lời thật lòng là hay nhất' },
        { icon: '💭', title: 'Suy Nghĩ Kỹ', message: 'Đừng ngại chia sẻ!' },
        { icon: '💝', title: 'Cởi Mở Nào!', message: 'Đây là cơ hội hiểu nhau hơn' }
    ],
    scoreUp: [
        { icon: '🎊', title: 'Xuất Sắc!', message: '+1 điểm cho đội!' },
        { icon: '⭐', title: 'Tuyệt Vời!', message: 'Đội đang chơi rất hay!' },
        { icon: '🏆', title: 'Ghi Điểm!', message: 'Tiếp tục phát huy!' }
    ],
    special: [
        { icon: '🌈', title: 'Vòng Đặc Biệt!', message: 'Cơ hội đảo ngược cuộc chơi!' },
        { icon: '✨', title: 'Cao Trào!', message: 'Đây là khoảnh khắc quyết định!' },
        { icon: '🚀', title: 'All-In!', message: 'Liều lĩnh để chiến thắng!' }
    ],
    milestone: [
        { icon: '🏅', title: 'Mốc Mới!', message: 'Bạn đã đạt được cột mốc quan trọng!' }
    ]
};

function getRandomEncouragement(type) {
    const messages = encouragementMessages[type] || encouragementMessages.challenge;
    return messages[Math.floor(Math.random() * messages.length)];
}

function showToast(icon, title, message, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-content">
            <span class="toast-title">${title}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;

    contributeElements.toastContainer.appendChild(toast);

    // Remove after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===== ACHIEVEMENT SYSTEM =====
const achievements = {
    'first_contrib': { icon: '🎖️', title: 'Nhà Sáng Tạo', desc: 'Góp câu hỏi đầu tiên' },
    'contrib_5': { icon: '⭐', title: 'Người Đóng Góp', desc: 'Góp 5 câu hỏi' },
    'contrib_10': { icon: '🌟', title: 'Siêu Đóng Góp', desc: 'Góp 10 câu hỏi' },
    'contrib_25': { icon: '💎', title: 'Huyền Thoại', desc: 'Góp 25 câu hỏi' },
    'first_game': { icon: '🎮', title: 'Game Thủ', desc: 'Chơi game đầu tiên' },
    'games_5': { icon: '🔥', title: 'Dân Chơi', desc: 'Chơi 5 game' },
    'games_10': { icon: '👑', title: 'Vua Chơi', desc: 'Chơi 10 game' }
};

function showAchievement(achievementKey) {
    const achievement = achievements[achievementKey];
    if (!achievement) return;

    if (contributionState.achievements.includes(achievementKey)) return;

    contributionState.achievements.push(achievementKey);
    saveContributionState();

    contributeElements.achievementIcon.textContent = achievement.icon;
    contributeElements.achievementTitle.textContent = achievement.title;
    contributeElements.achievementDesc.textContent = achievement.desc;

    contributeElements.achievementPopup.classList.add('active');

    // Also show a toast
    showToast('🏆', 'Thành Tựu Mới!', achievement.title, 'celebration');

    // Hide after 3 seconds
    setTimeout(() => {
        contributeElements.achievementPopup.classList.remove('active');
    }, 3000);
}

function checkContributionAchievements() {
    const count = contributionState.totalContributed;

    if (count >= 1 && !contributionState.achievements.includes('first_contrib')) {
        setTimeout(() => showAchievement('first_contrib'), 500);
    }
    if (count >= 5 && !contributionState.achievements.includes('contrib_5')) {
        setTimeout(() => showAchievement('contrib_5'), 500);
    }
    if (count >= 10 && !contributionState.achievements.includes('contrib_10')) {
        setTimeout(() => showAchievement('contrib_10'), 500);
    }
    if (count >= 25 && !contributionState.achievements.includes('contrib_25')) {
        setTimeout(() => showAchievement('contrib_25'), 500);
    }
}

function checkGameAchievements() {
    const count = contributionState.gamesPlayed;

    if (count >= 1 && !contributionState.achievements.includes('first_game')) {
        setTimeout(() => showAchievement('first_game'), 1000);
    }
    if (count >= 5 && !contributionState.achievements.includes('games_5')) {
        setTimeout(() => showAchievement('games_5'), 1000);
    }
    if (count >= 10 && !contributionState.achievements.includes('games_10')) {
        setTimeout(() => showAchievement('games_10'), 1000);
    }
}

// ===== OVERRIDE EXISTING FUNCTIONS WITH ENCOURAGEMENT =====
const originalStartGame = startGame;
window.startGame = startGame = function () {
    originalStartGame();
    if (gameState.teams.length > 0) {
        contributionState.gamesPlayed++;
        saveContributionState();

        // Start background music
        if (!audioSystem.isMuted) {
            audioSystem.startBgMusic();
        }
        playSound('success');

        const enc = getRandomEncouragement('gameStart');
        showToast(enc.icon, enc.title, enc.message, 'celebration');

        checkGameAchievements();
    }
};
document.getElementById('startGame').removeEventListener('click', originalStartGame);
document.getElementById('startGame').addEventListener('click', startGame);

// Override random functions to add encouragement
const originalRandomChallenge = randomChallenge;
window.randomChallenge = randomChallenge = function () {
    originalRandomChallenge();
    contributionState.challengesCompleted++;
    saveContributionState();

    // Show encouragement occasionally (30% chance)
    if (Math.random() < 0.3) {
        const enc = getRandomEncouragement('challenge');
        setTimeout(() => showToast(enc.icon, enc.title, enc.message, 'encouragement'), 500);
    }
};
document.getElementById('randomChallenge').removeEventListener('click', originalRandomChallenge);
document.getElementById('randomChallenge').addEventListener('click', randomChallenge);

const originalRandomQuestion = randomQuestion;
window.randomQuestion = randomQuestion = function () {
    playSound('cardReveal');
    originalRandomQuestion();
    contributionState.questionsAnswered++;
    saveContributionState();

    // Show encouragement occasionally (30% chance)
    if (Math.random() < 0.3) {
        const enc = getRandomEncouragement('question');
        setTimeout(() => showToast(enc.icon, enc.title, enc.message, 'encouragement'), 500);
    }
};
document.getElementById('randomQuestion').removeEventListener('click', originalRandomQuestion);
document.getElementById('randomQuestion').addEventListener('click', randomQuestion);

const originalRandomSpecial = randomSpecial;
window.randomSpecial = randomSpecial = function () {
    playSound('cardReveal');
    originalRandomSpecial();

    // Always show encouragement for special round
    const enc = getRandomEncouragement('special');
    setTimeout(() => showToast(enc.icon, enc.title, enc.message, 'celebration'), 500);
};
document.getElementById('randomSpecial').removeEventListener('click', originalRandomSpecial);
document.getElementById('randomSpecial').addEventListener('click', randomSpecial);

// Override changeScore to add encouragement
const originalChangeScore = changeScore;
window.changeScore = changeScore = function (teamIndex, delta) {
    originalChangeScore(teamIndex, delta);

    if (delta > 0) {
        const enc = getRandomEncouragement('scoreUp');
        showToast(enc.icon, enc.title, enc.message, 'success');
    }
};

// Initialize contribution system
setupContributionListeners();

// Load user contributions into game data
function loadUserContributions() {
    contributionState.contributions.forEach(c => {
        if (gameData[c.mode] && gameData[c.mode][c.type]) {
            if (!gameData[c.mode][c.type].includes(c.content)) {
                gameData[c.mode][c.type].push(c.content);
            }
        }
    });
}

loadUserContributions();

console.log('🎮 Game Thách Đấu loaded with Contribution & Encouragement features!');
console.log(`📊 Stats: ${contributionState.totalContributed} contributions, ${contributionState.gamesPlayed} games played`);

// ===== PUNISHMENT SYSTEM =====
const punishments = {
    light: [
        'Nhảy 10 cái jumping jack',
        'Hát 1 câu bài hát bất kỳ',
        'Làm mặt hài hước trong 10 giây',
        'Chạy tại chỗ 15 giây',
        'Nói "Tôi thua rồi" bằng 3 giọng điệu khác nhau',
        'Làm động tác yoga đơn giản',
        'Kể 1 joke ngắn',
        'Nhảy điệu nhảy vui vẻ'
    ],
    medium: [
        'Uống 1 ly nước chanh/cà phê đắng',
        'Đăng 1 story hài hước lên mạng xã hội',
        'Gọi điện cho 1 người bạn nói "Tao nhớ mày"',
        'Hát 1 bài hát hoàn chỉnh',
        'Làm 20 cái squat',
        'Nhảy TikTok dance challenge',
        'Bắt chước 1 người nổi tiếng',
        'Để người khác vẽ lên mặt (có thể xóa được)'
    ],
    heavy: [
        'Pha trà/cà phê cho tất cả mọi người',
        'Làm 30 cái push-up (hoặc nhiều nhất có thể)',
        'Đăng 1 bức ảnh xấu lên story',
        'Gửi tin nhắn "Anh/Em nhớ bạn" cho crush cũ',
        'Nhảy sexy dance trong 1 phút',
        'Để người khác control điện thoại trong 1 phút',
        'Kể 1 bí mật đáng xấu hổ',
        'Làm thử thách "nhìn không được cười" và thua thêm lần nữa'
    ]
};

function getRandomPunishment(level) {
    const list = punishments[level];
    return list[Math.floor(Math.random() * list.length)];
}

function showPunishment(level) {
    const punishment = getRandomPunishment(level);
    const punishmentCard = document.getElementById('punishmentCard');

    const emojis = { light: '😅', medium: '😰', heavy: '🔥' };
    const colors = { light: '#22c55e', medium: '#f59e0b', heavy: '#ef4444' };

    punishmentCard.innerHTML = `
        <div style="text-align: center;">
            <span style="font-size: 3rem;">${emojis[level]}</span>
            <p style="color: ${colors[level]}; margin-top: 15px;">${punishment}</p>
        </div>
    `;

    // Play sound
    playSound('punishment');

    // Show modal for dramatic effect
    const modal = document.getElementById('punishmentModal');
    const punishmentEmoji = document.getElementById('punishmentEmoji');
    const punishmentText = document.getElementById('punishmentText');

    punishmentEmoji.textContent = emojis[level];
    punishmentText.textContent = punishment;
    punishmentText.style.color = colors[level];
    modal.classList.add('active');
}

// Setup punishment buttons
document.querySelectorAll('.btn-punishment').forEach(btn => {
    btn.addEventListener('click', () => {
        showPunishment(btn.dataset.level);
    });
});

document.getElementById('closePunishment').addEventListener('click', () => {
    document.getElementById('punishmentModal').classList.remove('active');
});

// ===== GAME HISTORY SYSTEM =====
const gameHistory = {
    games: JSON.parse(localStorage.getItem('gameHistory') || '[]')
};

function saveGameToHistory() {
    if (gameState.teams.length === 0) return;

    const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);
    const winnerScore = sortedTeams[0].score;

    const gameRecord = {
        id: Date.now(),
        date: new Date().toISOString(),
        mode: gameState.selectedMode,
        modeName: gameData[gameState.selectedMode]?.name || 'Unknown',
        teams: gameState.teams.map(t => ({
            name: t.name,
            color: t.color,
            score: t.score,
            isWinner: t.score === winnerScore
        })),
        questionsUsed: gameState.usedQuestions.length,
        challengesUsed: gameState.usedChallenges.length
    };

    gameHistory.games.unshift(gameRecord);
    // Keep only last 20 games
    if (gameHistory.games.length > 20) {
        gameHistory.games = gameHistory.games.slice(0, 20);
    }

    localStorage.setItem('gameHistory', JSON.stringify(gameHistory.games));
}

function renderHistoryList() {
    const historyList = document.getElementById('historyList');

    if (gameHistory.games.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <p>📭 Chưa có ván chơi nào được lưu</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Hoàn thành 1 game để xem lịch sử!</p>
            </div>
        `;
        return;
    }

    historyList.innerHTML = gameHistory.games.map(game => {
        const date = new Date(game.date);
        const dateStr = date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="history-item">
                <div class="history-item-header">
                    <span class="history-item-date">${dateStr}</span>
                    <span class="history-item-mode">${game.modeName}</span>
                </div>
                <div class="history-item-teams">
                    ${game.teams.map(team => `
                        <div class="history-team ${team.isWinner ? 'winner' : ''}">
                            <span class="history-team-dot" style="background: ${team.color}"></span>
                            ${team.isWinner ? '👑 ' : ''}${team.name}: ${team.score}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function openHistoryModal() {
    renderHistoryList();
    document.getElementById('historyModal').classList.add('active');
}

function closeHistoryModal() {
    document.getElementById('historyModal').classList.remove('active');
}

function clearHistory() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử?')) {
        gameHistory.games = [];
        localStorage.setItem('gameHistory', '[]');
        renderHistoryList();
        showToast('🗑️', 'Đã Xóa', 'Lịch sử đã được xóa', 'info');
    }
}

function exportHistoryToPDF() {
    // Simple export as downloadable text (PDF would require external library)
    let content = '📜 LỊCH SỬ VÁN CHƠI - GAME THÁCH ĐẤU\n';
    content += '='.repeat(50) + '\n\n';

    gameHistory.games.forEach((game, index) => {
        const date = new Date(game.date).toLocaleDateString('vi-VN');
        content += `Ván ${index + 1} - ${date}\n`;
        content += `Phiên bản: ${game.modeName}\n`;
        content += `Kết quả:\n`;
        game.teams.forEach(team => {
            content += `  ${team.isWinner ? '👑 ' : '   '}${team.name}: ${team.score} điểm\n`;
        });
        content += '\n';
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lich-su-game-thach-dau.txt';
    a.click();
    URL.revokeObjectURL(url);

    showToast('📤', 'Đã Xuất', 'File lịch sử đã được tải xuống', 'success');
}

// History event listeners
document.getElementById('openHistory').addEventListener('click', openHistoryModal);
document.getElementById('closeHistory').addEventListener('click', closeHistoryModal);
document.getElementById('clearHistory').addEventListener('click', clearHistory);
document.getElementById('exportHistory').addEventListener('click', exportHistoryToPDF);

// Save game when showing results
const originalShowResults = showResults;
window.showResults = showResults = function () {
    originalShowResults();
    saveGameToHistory();
};

// ===== MC MODE =====
let mcModeActive = false;
let answerHidden = false;

function toggleMCMode() {
    mcModeActive = !mcModeActive;

    const banner = document.getElementById('mcModeBanner');
    const toggleBtn = document.getElementById('toggleMCMode');

    if (mcModeActive) {
        banner.classList.add('active');
        toggleBtn.classList.add('active');
        showToast('🎤', 'Chế Độ MC', 'Đã bật - Chỉ bạn thấy đáp án', 'success');
    } else {
        banner.classList.remove('active');
        toggleBtn.classList.remove('active');
        document.body.classList.remove('answer-hidden');
        answerHidden = false;
    }
}

function toggleAnswerVisibility() {
    answerHidden = !answerHidden;

    if (answerHidden) {
        document.body.classList.add('answer-hidden');
    } else {
        document.body.classList.remove('answer-hidden');
    }
}

document.getElementById('toggleMCMode').addEventListener('click', toggleMCMode);
document.getElementById('hideAnswerBtn').addEventListener('click', toggleAnswerVisibility);

// ===== SOUND SYSTEM =====
let soundEnabled = true;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const sounds = {
    click: { freq: 800, duration: 0.1 },
    success: { freq: [523, 659, 784], duration: 0.15 },
    timer: { freq: 440, duration: 0.1 },
    timerEnd: { freq: [880, 440, 220], duration: 0.3 },
    punishment: { freq: [200, 150, 100], duration: 0.2 },
    win: { freq: [523, 659, 784, 1047], duration: 0.2 }
};

function playSound(type) {
    if (!soundEnabled) return;

    try {
        const sound = sounds[type] || sounds.click;
        const frequencies = Array.isArray(sound.freq) ? sound.freq : [sound.freq];

        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);

            oscillator.start(audioContext.currentTime + index * sound.duration);
            oscillator.stop(audioContext.currentTime + (index + 1) * sound.duration);
        });
    } catch (e) {
        console.log('Sound not supported');
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('toggleSound');

    if (soundEnabled) {
        btn.textContent = '🔊';
        btn.classList.remove('muted');
        playSound('click');
        showToast('🔊', 'Âm Thanh', 'Đã bật âm thanh', 'success');
    } else {
        btn.textContent = '🔇';
        btn.classList.add('muted');
    }
}

document.getElementById('toggleSound').addEventListener('click', toggleSound);

// Add sound to timer
const originalStartTimer = startTimer;
window.startTimer = startTimer = function () {
    playSound('click');

    // Store original timerInterval logic
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('timerStart').textContent = '▶️ Tiếp Tục';
        return;
    }

    timerRunning = true;
    document.getElementById('timerStart').textContent = '⏸️ Tạm Dừng';

    let remaining = parseInt(elements.timerDisplay.textContent);

    timerInterval = setInterval(() => {
        remaining--;
        elements.timerDisplay.textContent = remaining;

        if (remaining <= 10) {
            elements.timerDisplay.classList.add('warning');
            playSound('timer');
        }

        if (remaining <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            elements.timerDisplay.textContent = '⏰';
            document.getElementById('timerStart').textContent = '🔄 Đặt Lại';
            playSound('timerEnd');
            elements.timerDisplay.style.animation = 'pulse 0.3s ease-in-out 3';
        }
    }, 1000);
};

// Add sound to confetti/win
const originalCreateConfetti = createConfetti;
window.createConfetti = createConfetti = function () {
    originalCreateConfetti();
    playSound('win');
};

console.log('🎮 Phase 2 features loaded: Punishments, History, MC Mode, Sound Effects!');
