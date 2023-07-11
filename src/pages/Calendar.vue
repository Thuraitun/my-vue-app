<template>
    <div class="h-screen bg-slate-200">
        <div class="flex">
            <div class="m-auto">
                <h2 class="my-4 text-3xl font-bold text-center ">Calendar</h2>
                <section class="flex justify-between mx-4">
                    <h2 class="font-bold">{{ currentMonthName() }}</h2>
                    <h2 class="font-bold">{{ currentYear }}</h2>
                </section>
                <section class="flex my-2 ">
                    <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">{{ day }}</p>
                </section>
                <section class="flex flex-wrap">
                    <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
                    <p class="text-center" style="width: 14.28%" v-for="num in dayInMonth()" :key="num"
                        :class="currentDateClass(num)">{{ num }}</p>
                </section>
                <section class="flex justify-between mx-4 my-4">
                    <button class="px-2 border rounded bg-[#42b883] text-gray-100" @click="prev">prev </button>
                    <button class="px-2 border rounded bg-[#42b883] text-gray-100" @click="next">next </button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            currentDay: new Date().getUTCDate(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
    },
    methods: {
        dayInMonth() {
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next() {
            if (this.currentMonth === 11) {
                this.currentMonth = 1;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        prev() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
        currentMonthName() {
            return new Date(this.currentYear, this.currentMonth).toLocaleString("default", { month: 'long' })
        },
        currentDateClass(num) {
            const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? 'text-blue-600 font-bold' : '';
        }
    }
}
</script>

<style scoped></style>