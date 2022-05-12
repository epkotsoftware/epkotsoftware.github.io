<?php

class Helper
{
    public static function same2($value1, $value2, $value3): bool
    {
        if ($value1 === $value2 && $value2 === $value3) {
            return true;
        } else {
            return false;
        }
    }

}
