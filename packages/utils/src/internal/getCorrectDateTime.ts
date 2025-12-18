import { DateTime } from 'luxon'

export default function (date: DateTime|string|null): DateTime {
    if (!date) {
        return DateTime.now();
    }

    if (date instanceof DateTime) {
        return date;
    }

    const isoDate = DateTime.fromISO(date);

    if (isoDate.isValid) {
        return isoDate;
    }

    return DateTime.fromFormat(date, "yyyy-MM-dd");
}
