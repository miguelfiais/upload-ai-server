import { useEffect, useState } from 'react'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { api } from '@/lib/axios'

interface Prompt {
  id: string
  title: string
  template: string
}

interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

export const PrompSelect = (props: PromptSelectProps) => {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)
  useEffect(() => {
    api.get('/prompts').then((response) => setPrompts(response.data))
  }, [])

  const handlePromptSelected = (promptId: string) => {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId)

    if (!selectedPrompt) return null

    props.onPromptSelected(selectedPrompt.template)
  }

  return (
    <div className="space-y-2">
      <Label>Prompt</Label>
      <Select onValueChange={handlePromptSelected}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um prompt..." />
        </SelectTrigger>
        <SelectContent>
          {prompts?.map((prompt) => (
            <SelectItem key={prompt.id} value={prompt.id}>
              {prompt.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
