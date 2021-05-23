import React from 'react';
import { Modal, ModalContent } from './styles';

export default ({ isActivity }: { isActivity: boolean }) => {
  return (
    <Modal isActivity={isActivity}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <div className="loader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.219 116.756">
            <g id="Group_858" data-name="Group 858" transform="translate(-148.101 -279)">
              <path strokeMiterlimit="10" id="Path_1758" data-name="Path 1758" className="cls-1 teste" d="M690.276,98a17.686,17.686,0,0,0-17.763,17.521v9.865H654.9v7.509h17.613v18.4h7.613v-18.4h10a17.686,17.686,0,0,0,17.763-17.521A17.433,17.433,0,0,0,690.276,98Zm0,27.385h-10v-9.865a10,10,0,1,1,10,9.865Z" transform="translate(-441.57 181)"/>
              <g id="Group_845" data-name="Group 845" transform="translate(148.1 306.533)">
                <g id="Group_840" data-name="Group 840">
                  <path id="Path_1759" data-name="Path 1759" className="cls-3" d="M693.894,205.923H618.962a7.751,7.751,0,0,1-7.762-7.656V124.356a7.752,7.752,0,0,1,7.762-7.656h50.6v7.509h-50.6a.145.145,0,0,0-.149.147V198.12a.146.146,0,0,0,.149.147h74.932a.145.145,0,0,0,.149-.147V148.8h7.613V198.12A7.781,7.781,0,0,1,693.894,205.923Z" transform="translate(-611.2 -116.7)"/>
                </g>
                <g id="Group_841" data-name="Group 841" transform="translate(15.524 16.196)" className="row1">
                  <path id="Path_1760" data-name="Path 1760" className="cls-2" d="M630.108,137.27h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.091,1.091,0,0,1,630.108,137.27Z" transform="translate(-621.6 -127.7)"/>
                  <path id="Path_1761" data-name="Path 1761" className="cls-2" d="M641.208,137.27h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.17,1.17,0,0,1,641.208,137.27Z" transform="translate(-616.131 -127.7)"/>
                  <path id="Path_1762" data-name="Path 1762" className="cls-2" d="M652.308,137.27h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.17,1.17,0,0,1,652.308,137.27Z" transform="translate(-610.663 -127.7)"/>
                  <path id="Path_1763" data-name="Path 1763" className="cls-2" d="M663.408,137.27h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214C664.453,136.828,664.005,137.27,663.408,137.27Z" transform="translate(-605.194 -127.7)"/>
                </g>
                <g id="Group_842" data-name="Group 842" transform="translate(15.524 32.097)" className="row2">
                  <path id="Path_1764" data-name="Path 1764" className="cls-2" d="M630.108,148.07h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.169,1.169,0,0,1,630.108,148.07Z" transform="translate(-621.6 -138.5)"/>
                  <path id="Path_1765" data-name="Path 1765" className="cls-2" d="M641.208,148.07h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,641.208,148.07Z" transform="translate(-616.131 -138.5)"/>
                  <path id="Path_1766" data-name="Path 1766" className="cls-2" d="M652.308,148.07h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,652.308,148.07Z" transform="translate(-610.663 -138.5)"/>
                  <path id="Path_1767" data-name="Path 1767" className="cls-2" d="M663.408,148.07h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214C664.453,147.481,664.005,148.07,663.408,148.07Z" transform="translate(-605.194 -138.5)"/>
                </g>
                <g id="Group_843" data-name="Group 843" transform="translate(15.524 47.998)" className="row3">
                  <path id="Path_1768" data-name="Path 1768" className="cls-2" d="M630.108,158.87h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.169,1.169,0,0,1,630.108,158.87Z" transform="translate(-621.6 -149.3)"/>
                  <path id="Path_1769" data-name="Path 1769" className="cls-2" d="M641.208,158.87h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,641.208,158.87Z" transform="translate(-616.131 -149.3)"/>
                  <path id="Path_1770" data-name="Path 1770" className="cls-2" d="M652.308,158.87h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,652.308,158.87Z" transform="translate(-610.663 -149.3)"/>
                  <path id="Path_1771" data-name="Path 1771" className="cls-2" d="M663.408,158.87h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214C664.453,158.281,664.005,158.87,663.408,158.87Z" transform="translate(-605.194 -149.3)"/>
                </g>
                <g id="Group_844" data-name="Group 844" transform="translate(15.524 63.899)" className="row4">
                  <path id="Path_1772" data-name="Path 1772" className="cls-2" d="M630.108,169.67h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.169,1.169,0,0,1,630.108,169.67Z" transform="translate(-621.6 -160.1)"/>
                  <path id="Path_1773" data-name="Path 1773" className="cls-2" d="M641.208,169.67h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,641.208,169.67Z" transform="translate(-616.131 -160.1)"/>
                  <path id="Path_1774" data-name="Path 1774" className="cls-2" d="M652.308,169.67h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214A1.275,1.275,0,0,1,652.308,169.67Z" transform="translate(-610.663 -160.1)"/>
                  <path id="Path_1775" data-name="Path 1775" className="cls-2" d="M663.408,169.67h-7.314a1.275,1.275,0,0,1-1.194-1.178v-7.214a1.276,1.276,0,0,1,1.194-1.178h7.314a1.275,1.275,0,0,1,1.194,1.178v7.214C664.453,169.081,664.005,169.67,663.408,169.67Z" transform="translate(-605.194 -160.1)"/>
                </g>
              </g>
              <rect id="Rectangle_1659" data-name="Rectangle 1659" className="cls-2" width="7.613" height="4.123" transform="translate(230.944 314.042)"/>
            </g>
          </svg>
          <span>Carregando...</span>
        </div>
      </ModalContent>
    </Modal>

  )
}
