import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label className="label">My Label</Label>,
    environmentProps: {
        canvasHeight: 5
    }
});
