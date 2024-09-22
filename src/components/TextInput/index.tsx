import Container from './Container';
import Input from './Input';
import Label from './Label';
import Props from './Props';
import Textarea from './Textarea';

export default function TextInput(props: Props) {
  const input =
    props.type === 'textarea' ? (
      <Textarea
        id={props.id}
        name={props.id}
        required={props.required}
        rows={props.rows}
        spellCheck
      />
    ) : (
      <Input id={props.id} name={props.id} required={props.required} />
    );

  return (
    <Container>
      <Label htmlFor={props.id}>{props.label}</Label>
      {input}
    </Container>
  );
}
