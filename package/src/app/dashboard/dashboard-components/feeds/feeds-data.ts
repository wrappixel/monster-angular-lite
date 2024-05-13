export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'bi bi-bell',
        task: 'You have 4 pending tasks.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'bi bi-hdd',
        task: 'Server #1 overloaded.',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        task: 'New order received.',
        time: '31 May'
    },
    {
        class: 'bg-danger',
        icon: 'bi bi-person',
        task: 'New user registered.',
        time: '30 May'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        task: 'You have new password.',
        time: '21 May'
    },

] 