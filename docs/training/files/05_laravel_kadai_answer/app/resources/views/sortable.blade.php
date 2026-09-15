<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>メンバー配置</title>
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
  <script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.14.2/jquery-ui.min.js"></script>
  <script src="{{ asset('js/sort.js') }}" defer></script>
</head>
<body>

<header>
  <h1>メンバー配置</h1>
</header>

<main>
  <form method="post" action="{{ route('sortable.store') }}" class="entry">
    @csrf
    <input type="text" name="name" placeholder="名前を入力" required>

    <select name="department_id">
      @foreach ($departments as $department)
        <option value="{{ $department->id }}">{{ $department->department }}</option>
      @endforeach
    </select>

    <button type="submit">登録</button>
  </form>

  @error ('name')
    <p class="error">{{ $message }}</p>
  @enderror

  <div id="drag-area">
    @foreach ($sortables as $sortable)
      <div class="drag department{{ $sortable->department_id }}"
           data-id="{{ $sortable->id }}"
           style="left: {{ $sortable->left_x }}px; top: {{ $sortable->top_y }}px;">
        <span class="drag-id">{{ $sortable->id }}</span>
        {{ $sortable->name }}
        <span class="drag-department">{{ $sortable->department->department }}</span>
      </div>
    @endforeach
  </div>
</main>

</body>
</html>
