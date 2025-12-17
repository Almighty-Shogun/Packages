import type { DateTime } from 'luxon'
import getCorrectDateTime from './internal/getCorrectDateTime'

export default function (dateTime: DateTime|string|null, today: DateTime|string|null): boolean {
    const correctDateTime = getCorrectDateTime(dateTime);
    const correctToday = getCorrectDateTime(today);

    return correctDateTime.hasSame(correctToday, "day");
}
