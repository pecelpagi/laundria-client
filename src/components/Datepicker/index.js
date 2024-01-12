import * as Popover from '@radix-ui/react-popover';
import Label from '../Label';
import * as DatePickerComponent from './datepicker.components';
import { useDatepickerBusinessLogic } from './hooks';
import ComponentContextProvider from './ComponentContextProvider';
import { DisplaySelector } from './DisplaySelector';

const Index = (props) => {
  const {
    label, required, selected, ...rest
  } = props;
  const {
    isOpen,
    onOpen,
    onClose,
    onDateSelected: handleDateSelected,
  } = useDatepickerBusinessLogic(rest);

  return (
    <div>
      <Label {...{ label, required }} />
      <Popover.Root open={isOpen} defaultOpen={isOpen} {...{ modal: true }}>
        <Popover.Anchor asChild>
          <DatePickerComponent.SelectDateButton selected={selected} onClick={onOpen} />
        </Popover.Anchor>
        <Popover.Portal>
          <Popover.Content
            style={{
              background: '#FFF'
            }}
            onPointerDownOutside={onClose}
            className="border border-gray-200"
            align="start"
            side="bottom"
          >
            <ComponentContextProvider {...{
              selected,
              onDateSelected: handleDateSelected,
            }}>
              <DisplaySelector />
            </ComponentContextProvider>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Index;