import type { DateTime } from 'luxon'
import getCorrectLocale from './internal/getCorrectLocale'
import getCorrectDateTime from './internal/getCorrectDateTime'

export default function (date: DateTime|string|null, locale?: string): string {
    const localization = getCorrectLocale(locale);
    const dateTime = getCorrectDateTime(date);

    return dateTime.setLocale(localization).toLocaleString({
        hour: "2-digit",
        minute: "2-digit"
    });
}
