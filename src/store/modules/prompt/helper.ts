import { ss } from '@/utils/storage'
import DefaultTemplate from '@/assets/defaultTemplate.json'

const LOCAL_NAME = 'promptStore'
const defaultTemplateList = DefaultTemplate

export type PromptList = []

export interface PromptStore {
  promptList: any
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return promptStore ?? { promptList: [...defaultTemplateList] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
