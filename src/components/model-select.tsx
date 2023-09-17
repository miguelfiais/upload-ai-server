import { Label } from './ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'

export const ModelSelect = () => {
  return (
    <div className="space-y-2">
      <Label>Modelo</Label>
      <Select defaultValue="gpt3.5" disabled>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
        </SelectContent>
      </Select>
      <span className="block text-sm text-muted-foreground italic">
        Você poderá customizar essa opção em breve
      </span>
    </div>
  )
}
