import type { DateTime } from 'luxon'
import getCorrectLocale from './internal/getCorrectLocale'
import getCorrectDateTime from './internal/getCorrectDateTime'

export default function (date: DateTime|string|null, locale?: string): string {
    const dateTime = getCorrectDateTime(date);
    const localization = getCorrectLocale(locale);

    return dateTime.setLocale(localization).toLocaleString({
        hour: "2-digit"
    });
}
