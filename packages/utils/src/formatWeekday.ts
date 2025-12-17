import type { DateTime } from 'luxon'
import getCorrectLocale from './internal/getCorrectLocale'
import getCorrectDateTime from './internal/getCorrectDateTime'

export default function (date: DateTime|string|null, isLong: boolean = true, locale?: string): string {
    const localization = getCorrectLocale(locale);
    const dateTime = getCorrectDateTime(date);

    return dateTime.setLocale(localization).toLocaleString({
        weekday: isLong ? "long" : "short",
    });
}
