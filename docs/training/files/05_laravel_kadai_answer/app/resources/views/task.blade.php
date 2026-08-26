<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>タスク管理</title>
  <link rel="stylesheet" href="{{ asset('css/task.css') }}">
  <script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
  <script src="{{ asset('js/task.js') }}" defer></script>
</head>
<body>

<header>
  <h1>タスク管理</h1>
</header>

<main>
  <form method="post" action="{{ route('task.store') }}" class="entry">
    @csrf
    <input type="text" name="task" placeholder="やることを入力" maxlength="100" required>
    <button type="submit">追加</button>
  </form>

  @error('task')
    <p class="error">{{ $message }}</p>
  @enderror

  <ul id="task-list">
    @forelse ($tasks as $task)
      <li class="task" data-id="{{ $task->id }}">
        <span class="task-name">{{ $task->task }}</span>
        <span class="task-date">{{ $task->created_at?->format('Y/m/d') }}</span>
        <button type="button" class="done">完了</button>
      </li>
    @empty
      <li class="empty">タスクはありません</li>
    @endforelse
  </ul>
</main>

</body>
</html>
