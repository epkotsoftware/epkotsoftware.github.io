-- ============================================================
-- 予備の手順（B）
--
-- seeder を使わず、phpMyAdmin から直接データを入れたいときに使います。
-- 本線は seeder（php artisan migrate:fresh --seed）です。
--
-- 使い方
--   1. localhost:8889（phpMyAdmin）を開く
--   2. cbc_laravel を選ぶ
--   3. SQLタブに貼り付けて実行
--
-- 先に php artisan migrate でテーブルを作っておいてください。
-- テーブルが無い状態でこれを流すとエラーになります。
-- ============================================================

USE `cbc_laravel`;

-- 何度でもやり直せるように、いったん空にする
-- 外部キーがあるので sortables を先に消す
DELETE FROM `sortables`;
DELETE FROM `departments`;

ALTER TABLE `sortables`   AUTO_INCREMENT = 1;
ALTER TABLE `departments` AUTO_INCREMENT = 1;

-- 部署
INSERT INTO `departments` (`id`, `department`) VALUES
 (1, '開発部')
,(2, '営業部')
;

-- メンバー
INSERT INTO `sortables` (`id`, `name`, `department_id`, `left_x`, `top_y`) VALUES
 ( 1, '佐藤', 1, 810,  56)
,( 2, '鈴木', 1, 631, 302)
,( 3, '高橋', 1, 788, 326)
,( 4, '田中', 1,  79, 150)
,( 5, '伊藤', 1, 590,  96)
,( 6, '渡辺', 1, 389, 410)
,( 7, '山本', 2, 222,  91)
,( 8, '中村', 2, 824, 170)
,( 9, '小林', 2,  79, 250)
,(10, '加藤', 2, 452,  93)
,(11, '吉田', 2, 422, 263)
,(12, '山田', 2, 229, 320)
;

-- 確認
SELECT s.id, s.name, d.department, s.left_x, s.top_y
FROM sortables AS s
LEFT JOIN departments AS d ON s.department_id = d.id
ORDER BY s.id;
