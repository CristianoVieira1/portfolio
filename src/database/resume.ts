import IconAndroidStudio from '../assets/images/icons/android-studio.svg'
import IconFigma from '../assets/images/icons/icon-figma.svg'
import IconVsCode from '../assets/images/icons/vscode.svg'
import IconXcode from '../assets/images/icons/Xcode.svg'

export interface IResume {
  title: string
  icon: string
}

export const resumeData: IResume[] = [
  {
    icon: `${IconVsCode}`,
    title: 'VS Code'
  },
  {
    icon: `${IconFigma}`,
    title: 'Figma'
  },
  {
    icon: `${IconAndroidStudio}`,
    title: 'Android Studio'
  },
  {
    icon: `${IconXcode}`,
    title: 'XCode'
  }
]
