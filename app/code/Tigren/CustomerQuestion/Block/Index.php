<?php
/**
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Block;

use Magento\Framework\View\Element\Template;

class Index extends Template
{
    protected $request;

    public function __construct(
        Template\Context $context,
        \Magento\Framework\App\RequestInterface $request,
        array $data = []
    ) {
        $this->request = $request;
        parent::__construct($context, $data);
    }

}
