<?php

/** a関数 */
function a($引数1)
{

}

namespace App;

class AlbumHelper
{
    public static function a(array $albums): string
    {
        $result = '';
        foreach ($albums as $album) {
            $trackNames = [];
            foreach ($album['tracks'] as $track) {
                $trackNames[] = $track['name'];
            }
            $fields = [
                $album['id'],
                $album['name'],
                $album['note'],
                implode(',', $trackNames),
            ];
            $result .= implode("\t", $fields) . "\n";
        }
        return $result;
    }
}
