import Header from './Header';
import TokenInfo from './TokenInfo';
import Actions from './Actions';
import TerminalWindows from './TerminalWindows';
import AccessProtocol from './AccessProtocol';
import AsciiArt from './AsciiArt';

export default function NetworkHome() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <Header />
        <TokenInfo />
        <Actions />
        <TerminalWindows />
        <AccessProtocol />
        <AsciiArt />
      </div>
    </div>
  );
}