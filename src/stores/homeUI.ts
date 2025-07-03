import { defineStore } from "pinia";

export const  homeUI = defineStore("homeUI", {
    state: () => ({
        homeSectionHeight: 0,
        userHasScrolled: false,
    }),
    actions: {
        setHomeSectionHeight(height: number) {
            this.homeSectionHeight = height;
        },
        setUserHasScrolled(value: boolean) {
            this.userHasScrolled = value;
        }
      },
      getters: {
        getHomeSectionHeight(state): number {
            return state.homeSectionHeight;
        },
        getUserHasScrolled(state): boolean {
            return state.userHasScrolled;
        }
      }
})
