import { deepCopy, getSectionIndex } from '~/misc/helpers'

export const useAppStore = defineStore('app', {
	state: () => ({
		sections: [
			{
				id: 'hfhf83747',
				type: 'one',
				content: {
					title: 'Build Better Website Effortlessly Without Code',
					button: 'Get Started',
					image: '/screen.png',
				},
			},
			{
				id: 'hfh47',
				type: 'two',
				content: {
					title: 'Trusted By Agencies To Deliver Unique Experiences',
					description:
						"The Partner Program is designed to create the best digital experiences that increase conversions. Our team will work with you to take a serious step toward personalizing content, providing support on both strategic and commercial levels. Together, we'll lead the way in personalization within the modular landscape and deliver satisfying results to your clients.",
					subtitle: 'PARTNER WITH PREP',
					image: '/pexels-august-de-richelieu-4427622-scaled.jpeg',
				},
			},
		],
		currentSidebar: null,
	}),

	getters: {},

	actions: {
		handleEventEmit({ eventType, id, type }) {
			if (eventType === 'edit') return (this.currentSidebar = { eventType, id, type })

			const newSections = deepCopy(this.sections)
			const sectionIndex = getSectionIndex(this.sections, id)

			const thisSection = deepCopy(newSections[sectionIndex])

			if (eventType === 'moveUp') {
				if (sectionIndex !== 0) {
					newSections.splice(sectionIndex, 1)
					newSections.splice(sectionIndex - 1, 0, thisSection)
				}
			}

			if (eventType === 'moveDown') {
				if (sectionIndex - 1 !== newSections.length) {
					newSections.splice(sectionIndex, 1)
					newSections.splice(sectionIndex + 1, 0, thisSection)
				}
			}

			if (eventType === 'delete') {
				newSections.splice(sectionIndex, 1)
			}

			this.sections = deepCopy(newSections)
		},
		handleSectionChange({ id, key, value }) {
			const sectionIndex = getSectionIndex(this.sections, id)

			const newSections = deepCopy(this.sections)

			newSections[sectionIndex]['content'][key] = value

			this.sections = deepCopy(newSections)
		},
	},
})
